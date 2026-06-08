import { useState } from "react";
import { BagCheck } from "../../assets/iconify";
import { cartCoffee } from "../data/capital-brew-data";
import CheckoutModal from "./checkout.modal";
import CartItem from "../grid-item/cart.item";

interface NavbarProps {
    onClose: () => void;
    open: boolean;
}

export default function CartModal({ onClose, open }: NavbarProps) {
    
    const [showCheckoutSummary, setShowCheckoutSummary] = useState<boolean>(false)
    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    return (
        <div className="fixed inset-0 bg-black/40 z-[99] flex justify-end">
            <div onClick={onClose} className="flex-1"/>
            <div className="w-[350px] h-full bg-white shadow-xl animate-slide-left flex flex-col">
                <div className="flex justify-between items-center border-b py-4 px-3">
                    <h2 className="font-semibold text-sm">Cart</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {cartCoffee.map((cart) => {
                        const isExpanded = expandedItem === cart.id
                        const size: string = '12oz'
                        const addOns: string[] = [
                            'Extra Espresso Shot',
                            'Extra Milk',
                            'Sub Oat Milk'
                        ]
                        const details: string = [size, ...addOns].join(' | ')
                        return (
                            <CartItem 
                                cart={cart}
                                setExpandedItem={setExpandedItem}
                                isExpanded={isExpanded}
                                details={details}
                            />
                        )
                    })}
                </div>
                <div className="border-t p-4">
                    <div className="flex justify-between pb-4">
                        <div className="text-sm">Total (<span className="font-medium">{'12'} items</span>)</div>
                        <div className="text-sm font-medium">{`₱1,000.00`}</div>
                    </div>
                    <button onClick={() => setShowCheckoutSummary(true)} className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                        <div className="flex items-center justify-center">
                            <BagCheck size={18}/>
                        </div>
                        <p className="leading-none text-sm font-normal">Checkout</p>
                    </button>
                </div>
            </div>
            {showCheckoutSummary && (<CheckoutModal onClick={setShowCheckoutSummary}/>)}
        </div>
    )
}
