import { getAddOnsTotal, getTotalPriceByQty } from '../../utils/checkout.utils';
import { formatNumber } from '../../utils/format-number.utils';
import TrackYourOrderHeader from '../common/track-your-order-header'
import { Checkout, checkOutSummary } from '../data/capital-brew-data';
import IceCoffee from '../../assets/images/items/Image-4.png'
import { useState } from 'react';

interface TrackYourOrderModalProps {
    onClick: (value: boolean) => void;
}

export default function TrackYourOrderModal({ onClick }: TrackYourOrderModalProps) {

    const [showAllItems, setShowAllItems] = useState(false);
    const displayedItems = showAllItems
        ? checkOutSummary
        : checkOutSummary.slice(0, 1);

    const grandTotal: number = 1580
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-3xl bg-white rounded shadow max-h-[90vh] flex flex-col overflow-hidden">
                <TrackYourOrderHeader onClick={onClick}/>
                <div className="flex-1 overflow-y-auto p-6 space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-y-0">
                        <div className='font-medium'>Receiver Name:</div>
                        <div className="text-right text-gray-700">Juan Dela Cruz</div>
                        <div className='font-medium'>Your order from:</div>
                        <div className="text-right text-gray-700">Capital Brew STI Holdings</div>
                        <div className='font-medium'>Your order ID:</div>
                        <div className="text-right text-gray-700">20260608-0001</div>
                    </div>
                    <div>
                        <div className='font-medium'>Items:</div>
                        <div className='mt-2'>
                            {displayedItems.map((item: Checkout) => {
                                const unitPriceByQty = getTotalPriceByQty(item.sizePrice, item.quantity)
                                const addonsTotal = getAddOnsTotal(item.addOns)
                                const totalAmount = unitPriceByQty + addonsTotal;
                                return (
                                    <div key={item.id} className="pb-3">
                                        <div className="flex gap-3">
                                            <img
                                                src={IceCoffee}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1 space-y-0">
                                                <div className="font-medium">
                                                    {item.temperature} | {item.name}
                                                </div>
                                                <div className="flex justify-between text-gray-700">
                                                    <span>{item.size}</span>
                                                    <span>₱{formatNumber(item.sizePrice)}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-700">
                                                    <span>Qty</span>
                                                    <span>x{item.quantity}</span>
                                                </div>
                                                {item.addOns.length > 0 && (
                                                    <>
                                                        <div className="pt-1 font-medium">
                                                            Add-ons
                                                        </div>
                                                        {item.addOns.map((addon, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="text-gray-700 flex justify-between pl-4 text-sm"
                                                            >
                                                                <span>{addon.name}</span>
                                                                <span>₱{formatNumber(addon.price)}</span>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                                <div className="flex justify-between font-semibold pt-1">
                                                    <span>Total</span>
                                                    <span>₱{formatNumber(totalAmount)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {checkOutSummary.length > 1 && (
                                <button
                                    onClick={() => setShowAllItems((prev) => !prev)}
                                    className="w-full text-center text-sm font-medium text-blue-600 py-2 underline"
                                >
                                    {showAllItems
                                        ? 'View Less'
                                        : `View More (${checkOutSummary.length - 1} more item${checkOutSummary.length > 2 ? 's' : ''})`}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">Grand Total</span>
                        <span className="text-sm font-semibold">₱{formatNumber(grandTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
