import IceCoffee from '../../assets/images/items/Image-4.png'
import { Arrow } from '../../assets/iconify';

interface CartItemProps {
    cart: any
    setExpandedItem: React.Dispatch<React.SetStateAction<number | null>>;
    isExpanded: boolean;
    details: string;
}

export default function CartItem({ details, cart, setExpandedItem, isExpanded }: CartItemProps) {
    
    const toggleDetails = (id: number) => {
        setExpandedItem(prev => prev === id ? null : id);
    };

    return (
        <div key={cart.id} className="border border-gray-300 relative rounded p-3 grid grid-cols-[auto_1fr_auto] items-center overflow-hidden">
            <div className="flex justify-start items-start h-full mr-1">
                <img
                    src={IceCoffee}
                    className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded"
                />
            </div>
            {/* Details */}
            <div className="h-auto w-full space-y-1 overflow-hidden">
                <div className="grid grid-cols-11 gap-1">
                    <div className="h-full col-span-10 min-w-0 space-y-1">
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
                    <div className="col-span-1 flex justify-end">
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
}
