import { useState } from 'react'
import LabelDivider from './label-divider'

export default function DeliveryMethod() {

    const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "deliver">("pickup");
    const [location, setLocation] = useState<string>("");

    return (
        <div className="pt-4 space-y-2">
            <LabelDivider label="Delivery Method"/>
            <div className="flex gap-4">
                <label className="flex items-center gap-1">
                    <input
                        type="radio"
                        checked={deliveryMethod === "pickup"}
                        onChange={() => setDeliveryMethod("pickup")}
                    />
                    Pickup
                </label>
                <label className="flex items-center gap-1">
                    <input
                        type="radio"
                        checked={deliveryMethod === "deliver"}
                        onChange={() =>
                            setDeliveryMethod("deliver")
                        }
                    />
                    Deliver
                </label>
            </div>
            {/* LOCATION INPUT */}
            {deliveryMethod === "deliver" && (
                <textarea
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="11th Floor, STI Holding Center, 6764 Ayala Ave, Makati City"
                    className="w-full border outline-none focus:border-cbColor px-3 py-2 rounded text-sm resize-none"
                    rows={3}
                />
            )}
        </div>
    )
}
