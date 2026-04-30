interface ButtonProps {
    label: string
    type: "submit" | "reset" | "button" | undefined
    className?: string;
    onClick?: () => void
}

export default function Button({
    className = 'bg-cbColor text-white inline-flex w-full items-center justify-center rounded p-2.5 text-sm lg:text-xs font-medium',
    type, label, onClick
}: ButtonProps) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
