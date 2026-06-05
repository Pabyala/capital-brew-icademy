interface LabelDividerProps {
    label: string;
}

export default function LabelDivider({ label }: LabelDividerProps) {
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="flex-1 h-[1px] bg-[#AA6833]" />
            <p className="text-sm font-semibold whitespace-nowrap">{label}</p>
            <div className="flex-1 h-[1px] bg-[#AA6833]" />
        </div>
    )
}
