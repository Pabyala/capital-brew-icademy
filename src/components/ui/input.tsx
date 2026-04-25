import React from 'react'

interface InputProps {
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    type?: string;
    value: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    autoComplete?: string;
    minLength?: number;
}

export default function Input({
    placeholder, required, maxLength, type, value, onChange, 
    className = 'block w-full text-xs rounded border border-gray-300 px-3 py-2 pr-10 shadow-sm outline-none focus:border-black',
    autoComplete, minLength
}: InputProps) {
    return (
        <input
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            autoComplete={autoComplete}
        />
    )
}
