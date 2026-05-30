import { BagCheck, CheckedItem, Delete } from "../../assets/iconify";
import { cartCoffee } from "../data/capital-brew-data";

interface NavbarProps {
    onClose: () => void;
    open: boolean;
}

export default function CartModal({ onClose, open }: NavbarProps) {
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
                    {cartCoffee.map((cart) => (
                        <div
                            key={cart.id}
                            className="border border-gray-300 relative bg-cbLightColor rounded p-3 grid grid-cols-[auto_1fr_auto] gap-3 items-center"
                            >
                            
                            <div className="absolute top-0 left-0">
                                {/* <CheckedItem color="#AA6833" size={25}/> */}
                                {/* <CheckedItem color="#ffffff" size={25}/> */}
                                <CheckedItem color="#AA6833" size={25}/>
                            </div>
                            {/* Image */}
                            <img
                                // src={cart.coffeeImage}
                                // alt={cart.coffeeName}
                                className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded"
                            />

                            {/* Details */}
                            <div className="h-full space-y-1">
                                <div className="font-medium text-xs">{cart.coffeeName}</div>
                                <div className="text-xs">{`${cart.ounce} | ${cart.categoryType}`}</div>
                                <div className="font-medium text-xs">{`₱${cart.price}`}</div>
                                {/* <div className="flex items-center gap-2">
                                    <button className="w-6 h-6 font-semibold flex items-center justify-center border border-cbColor rounded-full">-</button>
                                    <span className="text-xs font-medium">{`14`}</span>
                                    <button className="w-6 h-6 font-semibold flex bg-cbColor text-white items-center justify-center border rounded-full">+</button>
                                </div> */}
                            </div>

                            {/* Qty Controls */}
                            <div className="flex flex-col items-start h-full gap-3">
                                <div className="w-full">
                                    <div className="flex justify-center">
                                        <Delete size={20}/>
                                        {/* <CloseEx size={20}/> */}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="w-6 h-6 font-semibold flex items-center justify-center border border-cbColor rounded-full">-</button>
                                    <span className="text-xs font-medium">{`14`}</span>
                                    <button className="w-6 h-6 font-semibold flex bg-cbColor text-white items-center justify-center border rounded-full">+</button>
                                </div>
                            </div>
                            </div>
                    ))}
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
