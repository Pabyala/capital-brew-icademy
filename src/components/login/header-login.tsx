import CBLogoLogIn from '../../assets/images/capital brew logo.png'

interface HeaderLoginProps {
    label: string;
}

export default function HeaderLogin({ label }: HeaderLoginProps) {
    return (
        <div className='text-center mb-5 space-y-3'>
            <img
                src={CBLogoLogIn}
                alt="Capital Brew Logo"
                className="mx-auto h-[70px] object-contain lg:h-[60px]"
            />
            <p className='text-gray-600 text-sm lg:text-xs'>{label}</p>
        </div>
    )
}
