import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { branches } from '../../pages/branch-option.page';
import { selectFilterBranch, selectFilterEndDate, selectFilterStartDate, setBranchCategory, setFilterDate,} from '../../features/orders/filter-orders.features.slice';
import { setClearModal } from '../../features/modals/modal-type.features.slice';

export default function MyOrderFilterModal() {
    
    const dispatch = useDispatch();

    // current applied (redux)
    const selectBranch = useSelector(selectFilterBranch);
    const selectStartDate = useSelector(selectFilterStartDate);
    const selectEndDate = useSelector(selectFilterEndDate);

    // local draft state (NOT saved yet)
    const [tempBranch, setTempBranch] = useState(selectBranch);
    const [tempStart, setTempStart] = useState(selectStartDate);
    const [tempEnd, setTempEnd] = useState(selectEndDate);

    // APPLY BUTTON
    const handleApply = () => {
        dispatch(setBranchCategory(tempBranch));
        dispatch(setFilterDate({ type: 'start', value: tempStart }));
        dispatch(setFilterDate({ type: 'end', value: tempEnd }));

        // close
        dispatch(setClearModal({ type: 'modalShow' }))
    };

    // CANCEL = reset draft
    const handleCancel = () => {
        setTempBranch(selectBranch);
        setTempStart(selectStartDate);
        setTempEnd(selectEndDate);

        // close
        dispatch(setClearModal({ type: 'modalShow' }))
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-[99] flex items-end">
            <div onClick={handleCancel} className="absolute inset-0" />
            <div className="relative w-full max-h-[80vh] bg-white rounded-t-xl z-10">
                {/* HEADER */}
                <div className="p-2.5 mb-3 border-b">
                    <div className="grid grid-cols-3 gap-3">
                        <div onClick={handleCancel} className="text-sm flex items-end justify-start cursor-pointer">Cancel</div>
                        <div className="text-sm flex items-center justify-center font-semibold">Filters</div>
                        <div onClick={handleApply} className="text-sm flex items-end justify-end font-medium text-cbColor cursor-pointer">Apply</div>
                    </div>
                </div>
                {/* BODY */}
                <div className="px-3 pb-7 space-y-4">
                    {/* BRANCH */}
                    <div className="space-y-2">
                        <div className="text-sm font-medium">Branch category</div>
                        <div className="flex flex-wrap gap-2">
                            <label className={`flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                ${tempBranch === null
                                    ? 'border-cbColor bg-gray-100 text-cbColor'
                                    : 'border-gray-200 bg-gray-100 hover:border-cbColor text-gray-700'
                                }`}
                            >
                                <input
                                    type="radio"
                                    checked={tempBranch === null}
                                    onChange={() => setTempBranch(null)}
                                    className="hidden"
                                />
                                <div className="text-sm">All</div>
                            </label>
                            {branches.map((branch) => {
                                const isSelected = tempBranch?.id === branch.id;
                                return (
                                    <label
                                        key={branch.id}
                                        className={`flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                        ${isSelected
                                            ? 'border-cbColor bg-gray-100 text-cbColor'
                                            : 'border-gray-200 bg-gray-100 hover:border-cbColor text-gray-700'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            checked={isSelected}
                                            onChange={() =>
                                                setTempBranch(branch)
                                            }
                                            className="hidden"
                                        />
                                        <div className="text-sm">{branch.name}</div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                    {/* DATE */}
                    <div className="space-y-2">
                        <div className="text-sm font-medium">Date order</div>
                        <div className="flex items-center gap-2">
                            <input
                                type="date"
                                className="border outline-none text-sm rounded px-2 py-1 flex-1"
                                value={tempStart}
                                onChange={(e) =>
                                    setTempStart(e.target.value)
                                }
                            />
                            <span className="text-sm text-gray-500">-</span>
                            <input
                                type="date"
                                className="border outline-none text-sm rounded px-2 py-1 flex-1"
                                value={tempEnd}
                                onChange={(e) =>
                                    setTempEnd(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}