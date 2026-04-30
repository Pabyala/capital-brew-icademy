interface LabelProps {
    className?: string;
    label: string;
}

export default function Label({
    label,
    className = 'block text-sm font-medium lg:text-xs',
}: LabelProps) {
    return (
        <label className={className}>{label}</label>
    )
}
