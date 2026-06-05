import { Checkout } from '../data/capital-brew-data'
import { formatNumber } from '../../utils/format-number.utils';

interface CheckoutProps {
    item: Checkout;
    totalAmount: number;
}

export default function CheckoutItem({ item, totalAmount }: CheckoutProps) {
    return (
        <div key={item.id} className="border-b pb-1 space-y-0">
            <div className="flex justify-between">
                <span className="text-sm font-semibold">
                    {item.temperature} | {item.name}
                </span>
                {/* <span className="text-sm font-semibold">₱{item.sizePrice}</span> */}
            </div>
            <div className="flex justify-between">
                <span>{item.size}</span>
                {/* <span>{`${item.sizePrice} (x${item.quantity})`}</span> */}
                <span>{item.sizePrice}</span>
            </div>
            <div className="flex justify-between">
                <span>{'Qty'}</span>
                <span>x{item.quantity}</span>
            </div>
            {/* ADD ONS */}
            {item.addOns.length !== 0 && (
                <div className="mt-2">Add ons:</div>
            )}
            {item.addOns.length !== 0 && (
                item.addOns.map((addon, idx) => (
                    <div key={idx} className="flex justify-between pl-4">
                        <span>{addon.name}</span>
                        <span>{addon.price}</span>
                    </div>
                ))
            )}
            {/* TOTAL */}
            <div className="flex justify-between font-semibold pt-1">
                <span>Total</span>
                <span>₱{formatNumber(totalAmount)}</span>
            </div>
        </div>
    )
}
