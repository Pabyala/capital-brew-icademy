import React from 'react'
import { BasilEyeClosedOutline, IconamoonEyeLight } from '../../assets/icons';

interface EyeButtonProps {
    value: string;
    onClick: () => void;
    className?: string;
    isShowEye: boolean;
    type: "submit" | "reset" | "button" | undefined
}

export default function EyeButton({
    className = 'absolute inset-y-0 right-2 flex items-center justify-center text-gray-500',
    onClick, value, isShowEye, type
}: EyeButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {value.length !== 0 && (
                isShowEye ? (
                    <IconamoonEyeLight width={15} height={15} />
                ) : (
                    <BasilEyeClosedOutline width={15} height={15} />
                )
            )}
        </button>
    )
}
