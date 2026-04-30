import React from 'react'
import CBLogoIcon from '../assets/images/CB-LOGO-ICON.png'

export default function LoadingPage() {
    return (
        // <div className="min-h-screen flex items-center justify-center">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[999]">
            <img
                src={CBLogoIcon}
                alt="Capital Brew Logo"
                //className="w-[300px] h-[120px] object-contain animate-[pulse_1.5s_ease-in-out_infinite]"
                // className="w-[300px] h-[120px] object-contain opacity-70 animate-[pulse_1.8s_ease-in-out_infinite]"
                className="h-[80px] lg:h-[100px] object-contain opacity-80 animate-pulse select-none"
            />
        </div>
    )
}
