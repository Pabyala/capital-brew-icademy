import { useState } from 'react'
import capitalBrewLogo from "../assets/images/capital brew logo.png";
import { RiAccountCircleLine } from '../assets/iconify';
import OutletPage from './outlet.page';

interface Product {
    id: number
    name: string
    price: number
}

const products: Product[] = [
    { id: 1, name: 'Cappuccino', price: 120 },
    { id: 2, name: 'Latte', price: 130 },
    { id: 3, name: 'Espresso', price: 100 },
]

export default function POSPage() {
    const [cart, setCart] = useState<{ product: Product; qty: number }[]>([])

    return (
        <div className='min-h-screen'>
            <div className='h-screen flex flex-col bg-gray-100'>
                {/* NAVBAR */}
                <div className='w-full flex justify-center items-center fixed bg-white shadow-md z-50'>
                    <div className='container lg:px-8'>
                        <div className='flex justify-between items-center h-16 lg:container'>
                            {/* LOGO */}
                            {/* <div className="flex items-center gap-3 cursor-pointer">
                                <img
                                    src={capitalBrewLogo} 
                                    alt="Admin Dashboard"
                                    className="h-[30px] md:h-[40px] w-auto object-contain"
                                />
                            </div> */}

                            <div className='flex justify-between items-center w-full'>
                                <p className='text-sm lg:text-xs font-semibold truncate'>Good afternoon, Juan Cruz!</p>
                                <div className='flex justify-center items-center'>
                                    <RiAccountCircleLine height={30} width={30}/>
                                </div>
                            </div>

                            {/* ICON */}
                            {/* <div className='flex items-center gap-3 relative'>

                            </div> */}
                        </div>
                    </div>
                </div>
                <OutletPage/>
            </div>
        </div>
    )
}