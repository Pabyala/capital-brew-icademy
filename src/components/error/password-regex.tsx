interface PasswordRegexProps {
    password: string;
}

export default function PasswordRegex({ password } : PasswordRegexProps) {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    return (
        <>
            {!passwordRegex.test(password) ? (
                <p className="text-xs lg:text-[10px] text-red-500">
                    Password must contain at least 6 characters, including uppercase, lowercase, and a number.
                </p>
            ) : (
                <p className="text-xs lg:text-[10px] text-green-600">
                    Password meets requirements
                </p>
            )}
        </>
    )
}
