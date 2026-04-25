interface LabelProps {
    className?: string;
    label: string;
}

export default function Label({
    label,
    className = 'block text-xs font-medium',
}: LabelProps) {
    return (
        <label className={className}>{label}</label>
    )
}
