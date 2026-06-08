interface TrackYourOrderHeaderProps {
    onClick: (value: boolean) => void;
}

export default function TrackYourOrderHeader({ onClick }: TrackYourOrderHeaderProps) {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b">
            <div>
                <h2 className="text-base font-semibold">Order Summary</h2>
                <div className="text-xs font-medium">20260608-0001</div>
            </div>
            <button onClick={() => onClick(false)} className="text-sm">✕</button>
        </div>
    )
}
