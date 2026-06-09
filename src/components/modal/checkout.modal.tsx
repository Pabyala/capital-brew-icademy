import { useState } from "react";
import { BagCheck } from "../../assets/iconify";
import { AddOns, Checkout, checkOutSummary } from "../data/capital-brew-data";
import LabelDivider from "../common/label-divider";
import { formatNumber } from "../../utils/format-number.utils";
import CheckoutItem from "../grid-item/checkout.item";
import DeliveryMethod from "../common/delivery-method";
import { getAddOnsTotal, getTotalPriceByQty } from "../../utils/checkout.utils";
import CheckoutFooter from "../common/checkout-footer";
import CheckoutHeader from "../common/checkout-header";
import { useDispatch } from "react-redux";
import { setClearModal } from "../../features/modals/modal-type.features.slice";

export default function CheckoutModal() {

    const dispatch = useDispatch()

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-3xl bg-white rounded shadow max-h-[90vh] flex flex-col overflow-hidden">
                {/* HEADER */}
                <CheckoutHeader onClick={() => dispatch(setClearModal({ type: 'modalConfirm'}))}/>
                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-6 space-y-3 text-sm">
                    <LabelDivider label="My order"/>
                    {checkOutSummary.map((item: Checkout) => {
                        const unitPriceByQty = getTotalPriceByQty(item.sizePrice, item.quantity)
                        const addonsTotal = getAddOnsTotal(item.addOns)
                        const totalAmount = unitPriceByQty + addonsTotal;
                        return (
                            <CheckoutItem
                                key={item.id}
                                item={item}
                                totalAmount={totalAmount}
                            />
                        );
                    })}
                    <DeliveryMethod/>
                </div>
                {/* FOOTER */}
                <CheckoutFooter/>
            </div>
        </div>
    );
}