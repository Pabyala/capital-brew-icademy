export default function CheckoutHeader() {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b">
            <div>
                <h2 className="text-base font-semibold">Order Summary</h2>
                <div className="text-xs font-medium">Capital Brew STI Holdings</div>
            </div>
            <button className="text-sm">✕</button>
        </div>
    )
}
