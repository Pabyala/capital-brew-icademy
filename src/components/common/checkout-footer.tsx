import { BagCheck } from '../../assets/iconify'
import { formatNumber } from '../../utils/format-number.utils'
import { getAddOnsTotal, getTotalPriceByQty } from '../../utils/checkout.utils';
import { Checkout, checkOutSummary } from '../data/capital-brew-data';
import { useDispatch } from 'react-redux';
import { setClearModal } from '../../features/modals/modal-type.features.slice';

export default function CheckoutFooter() {

    const dispatch = useDispatch()

    const getItemTotal = (item: Checkout) => {
        const baseTotal = getTotalPriceByQty(item.sizePrice, item.quantity);
        const addonsTotal = getAddOnsTotal(item.addOns);
        
        return baseTotal + addonsTotal;
    };

    const getGrandTotal = (items: Checkout[]) => {
        return items.reduce((sum, item) => {
            return sum + getItemTotal(item);
        }, 0);
    };

    const handleCheckoutOrder = () => {
        dispatch(setClearModal({ type: 'modalConfirm'}))
    }

    return (
        <div className="border-t p-4 space-y-1.5">
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Grand Total</span>
                <span className="text-sm font-bold">₱{formatNumber(getGrandTotal(checkOutSummary))}</span>
            </div>
            <button onClick={handleCheckoutOrder} className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                <div className="flex items-center justify-center">
                    <BagCheck size={18}/>
                </div>
                <p className="leading-none text-sm font-semibold">Place order</p>
            </button>
        </div>
    )
}
