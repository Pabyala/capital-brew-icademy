import { useState } from "react";
import { Arrow, BagCheck, CheckedItem, Delete } from "../../assets/iconify";
import { cartCoffee } from "../data/capital-brew-data";

interface NavbarProps {
    onClose: () => void;
    open: boolean;
}

export default function CartModal({ onClose, open }: NavbarProps) {

    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    const toggleDetails = (id: number) => {
        setExpandedItem(prev => prev === id ? null : id);
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-end">
            <div onClick={onClose} className="flex-1"/>
            <div className="w-[350px] h-full bg-white shadow-xl animate-slide-left flex flex-col">
                <div className="flex justify-between items-center border-b py-4 px-3">
                    <h2 className="font-semibold text-sm">
                        Cart
                    </h2>
                    <button onClick={onClose} className="text-sm rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200">✕</button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {cartCoffee.map((cart) => {
                        const isExpanded = expandedItem === cart.id

                        const size = '12oz'
                        const addOns = [
                            'Extra Espresso Shot',
                            'Extra Milk',
                            'Sub Oat Milk'
                        ]

                        const details = [size, ...addOns].join(' | ')
                        return (
                            <div key={cart.id} className="border border-gray-300 relative rounded p-3 grid grid-cols-[auto_1fr_auto] items-center overflow-hidden">
                                <div className="absolute top-0 left-0">
                                    {/* <CheckedItem color="#AA6833" size={25}/> */}
                                    {/* <CheckedItem color="#ffffff" size={25}/> */}
                                    <CheckedItem color="#AA6833" size={25}/>
                                </div>
                                {/* Image */}
                                <div className="flex justify-start items-start h-full mr-1">
                                    <img
                                        // src={cart.coffeeImage}
                                        // alt={cart.coffeeName}
                                        className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded"
                                    />
                                </div>
                                {/* Details */}
                                <div className="h-auto w-full space-y-1 overflow-hidden">
                                    <div className="grid grid-cols-11 gap-1">
                                        <div className="h-full col-span-10 w-full space-y-1">
                                            <div className="font-medium text-xs">{`${cart.categoryType} | ${cart.coffeeName}`}</div>
                                            <div className="w-full text-[11px]">
                                                <div onClick={() => toggleDetails(cart.id)} className={`flex ${isExpanded ? 'items-start' : ''} justify-between gap-2`}>
                                                    <div className={`transition-transform ${isExpanded ? "" : "truncate flex-1 min-w-0"}`}>
                                                        {details}
                                                    </div>
                                                    <button className={`text-[11px] text-cbColor flex-shrink-0 ${isExpanded ? 'pt-1' : ''}`}>
                                                        {isExpanded ? <Arrow className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}/> : <Arrow/>}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex col-span-1 flex-col items-start h-full gap-3">
                                            <div className="text-xs underline text-cbColor">{`Edit`}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-11 gap-1">
                                        <div className="col-span-10">
                                            <div className="font-medium text-xs">{`₱${cart.price}`}</div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="text-xs">{`x12`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="border-t p-4">
                    <div className="flex justify-between pb-4">
                        <div className="text-sm">Total (<span className="font-medium">{'12'} items</span>)</div>
                        <div className="text-sm font-medium">{`₱1,000.00`}</div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                        <div className="flex items-center justify-center">
                            <BagCheck size={18}/>
                        </div>
                        <p className="leading-none text-sm font-normal">Checkout</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
