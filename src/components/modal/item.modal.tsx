import { useState } from 'react'
import IceCoffee from '../../assets/images/items/Image-4.png'
import { BagCheck } from '../../assets/iconify'
import { AddOns, coffeeSizes, temperature } from '../data/capital-brew-data'

interface ItemModalProps {
    setIsShowModal: (value: boolean) => void;
}

export default function ItemModal({ setIsShowModal }: ItemModalProps) {

    const [selected, setSelected] = useState<number[]>([]);
    const maxSelect = 2

    const toggleAddOn = (id: number) => {
        const isSelected = selected.includes(id)

        if (isSelected) {
            setSelected(selected.filter(item => item !== id))
        } else {
            if (selected.length < maxSelect) {
                setSelected([...selected, id])
            }
        }
    }

    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [selectedTemperature, setSelectedTemperature] = useState<number | null>(null)

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4'>
            <div className="w-full max-w-4xl bg-white rounded overflow-hidden shadow max-h-[90vh] my-auto flex flex-col">
                <div className='relative bg-white p-5 space-y-3 rounded-xl shadow-sm flex flex-col justify-between '>
                        <div className='space-y-3'>
                            <div className='w-full flex items-center justify-center'>
                                <div className="w-[150px] h-[150px] overflow-hidden rounded-t-lg flex">
                                    <img
                                        src={IceCoffee}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-base text-center font-bold break-words leading-tight'>
                                    {'Matcha'}
                                </p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="mb-2 clear-start flex justify-between">
                                <div className='flex items-center justify-center space-x-2'>
                                    <p className='text-sm font-medium'>Temperature</p>
                                    <p className='text-[11px] text-gray-500 italic'>* Pick 1</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {temperature.map((temp) => {
                                    const isSelected = selectedTemperature === temp.id
                                    return (
                                        <label
                                            key={temp.id}
                                            className={`
                                                flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                                ${isSelected ? 'border-cbColor bg-gray-50' : 'border-gray-200 hover:border-cbColor'}
                                            `}
                                        >
                                            <input
                                                type="radio"
                                                name="temp-size"
                                                className="hidden"
                                                checked={isSelected}
                                                onChange={() => setSelectedTemperature(temp.id)}
                                            />

                                            <div className={`text-[13px] ${isSelected ? 'text-cbColor' : 'text-gray-700'}`}>
                                                <span>{temp.name}</span>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="mb-2 clear-start flex justify-between">
                                <div className='flex items-center justify-center space-x-2'>
                                    <p className='text-sm font-medium'>Serving size</p>
                                    <p className='text-[11px] text-gray-500 italic'>* Pick 1</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {coffeeSizes.map((coffee) => {
                                    const isSelected = selectedSize === coffee.id
                                    return (
                                        <label
                                            key={coffee.id}
                                            className={`
                                                flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                                ${isSelected ? 'border-cbColor bg-gray-50' : 'border-gray-200 hover:border-cbColor'}
                                            `}
                                        >
                                            <input
                                                type="radio"
                                                name="coffee-size"
                                                className="hidden"
                                                checked={isSelected}
                                                onChange={() => setSelectedSize(coffee.id)}
                                            />

                                            <div className={`text-[13px] ${isSelected ? 'text-cbColor' : 'text-gray-700'}`}>
                                                <span>{coffee.size}</span>
                                                <span>{` - (₱${coffee.price})`}</span>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-2 clear-start flex justify-between">
                                <div className='flex items-center space-x-2'>
                                    <p className='text-sm font-medium'>Add-ons</p>
                                    <div className='text-[9px] px-2 py-0.5 bg-gray-200 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl'>Select up to 2</div>
                                </div>
                                {selected.length === maxSelect && (
                                    <div className='text-[9px] px-2 py-0.5 text-red-700'>Maximum 2</div>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {AddOns.map((add) => { 
                                    const isSelected = selected.includes(add.id)
                                    const reachedMax  = !isSelected && selected.length >= maxSelect
                                    const isUnavailable = add.isAvailable === false
                                    
                                    // disable only if:
                                    // 1. item is unavailable OR
                                    // 2. max reached AND item is not already selected
                                    const isDisabled = isUnavailable || (!isSelected && reachedMax)
                                    return (
                                        <label
                                            key={add.id}
                                            className={`flex items-center gap-2 px-1.5 py-0.5 rounded border transition
                                                ${isSelected ? 'border-cbColor bg-gray-50' : 'border-gray-200'}
                                                ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                                            `}
                                        >
                                            <input 
                                                type="checkbox" 
                                                className="hidden" 
                                                checked={isSelected}
                                                disabled={isDisabled}
                                                onChange={() => toggleAddOn(add.id)}
                                            />
                                            <div className={`text-[13px] ${isSelected ? 'text-cbColor' : 'text-gray-700'}`}>
                                                <span className="">{add.label}</span>
                                                <span className="">{` (+₱${add.prize})`}</span>
                                                <span className="text-[10px] italic">{` ${add.level}`}</span>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex  items-center justify-between border-t pt-2.5'>
                            <p className='text-base text-center font-medium text-cbColor'>{`₱170.00`}</p>
                            <div className="flex items-center gap-2">
                                <button className="w-7 h-7 text-1xl font-semibold flex items-center justify-center border border-cbColor rounded-full">-</button>
                                <span className="text-base font-medium">{`14`}</span>
                                <button className="w-7 h-7 text-1xl font-semibold flex bg-cbColor text-white items-center justify-center border rounded-full">+</button>
                            </div>
                        </div>
                        <div className='w-full pt-2'>
                            <button className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                                <div className="flex items-center justify-center">
                                    <BagCheck size={18}/>
                                </div>
                                <p className="leading-none text-sm font-medium">Add to cart</p>
                            </button>
                        </div>
                        <div className='absolute right-5 top-2'>
                            <button onClick={() => setIsShowModal(false)} className='w-8 h-8 flex items-center justify-center bg-[#aa693325] rounded-full border border-cbColor'>
                                <span className='text-xs'>✕</span>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
