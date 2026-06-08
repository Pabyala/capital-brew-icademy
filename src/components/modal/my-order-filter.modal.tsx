import { useState } from 'react'
import { branches } from '../../pages/branch-option.page'

interface MyOrderFilterModalProps {
    onClick: (value: boolean) => void;
}

export default function MyOrderFilterModal({ onClick }: MyOrderFilterModalProps) {

    const [selectedBranch, setSelectedBranch] = useState<number | null>(null)
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');

    return (
        <div className="fixed inset-0 bg-black/40 z-[99] flex items-end">
            <div onClick={() => onClick(false)} className="absolute inset-0" />
            <div className="relative w-full max-h-[80vh] bg-white rounded-t-xl z-10">
                <div className='p-2.5 mb-3 border-b'>
                    <div className='grid grid-cols-3 gap-3'>
                        <div onClick={() => onClick(false)} className='text-sm flex items-end justify-start'>Cancel</div>
                        <div className='text-sm flex items-center justify-center font-semibold'>Filters</div>
                        <div className='text-sm flex items-end justify-end font-medium text-cbColor'>Apply</div>
                    </div>
                </div>
                <div className='px-3 pb-7 space-y-4'>
                    <div className='space-y-2'>
                        <div className='text-sm font-medium'>Branch category</div>
                        <div className='flex flex-wrap gap-2'>
                            <label
                                className={`flex items-center gap-2 px-3 py-1 rounded border cursor-pointer transition
                                ${selectedBranch === null
                                    ? 'border-cbColor bg-gray-100 text-cbColor'
                                    : 'border-gray-200 bg-gray-100 hover:border-cbColor text-gray-700'
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="branch"
                                    className="hidden"
                                    checked={selectedBranch === null}
                                    onChange={() => setSelectedBranch(null)}
                                />
                                <div className="text-sm">
                                    All
                                </div>
                            </label>
                            {branches.map((branch) => {
                                const isSelected = selectedBranch === branch.id
                                return (
                                    <label
                                        key={branch.id}
                                        className={`flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                            ${isSelected ? 'border-cbColor bg-gray-100' : 'border-gray-200 bg-gray-100 hover:border-cbColor'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="coffee-size"
                                            className="hidden"
                                            checked={isSelected}
                                            onChange={() => setSelectedBranch(branch.id)}
                                        />
                                        <div className={`text-sm flex space-x-1 items-center ${isSelected ? 'text-cbColor' : 'text-gray-700'}`}>
                                            <div className='text-sm'>{branch.name}</div>
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-sm font-medium'>Date order</div>
                        <div className='flex flex-wrap gap-2'>
                            <div className='space-y-2'>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="date"
                                        className="border outline-none text-sm rounded px-2 py-1 flex-1"
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.target.value)}
                                    />
                                    <span className="text-sm text-gray-500">-</span>
                                    <input
                                        type="date"
                                        className="border outline-none text-sm rounded px-2 py-1 flex-1"
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
