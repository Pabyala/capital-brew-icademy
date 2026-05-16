import React from 'react'
import { HotCoffee } from '../../assets/iconify'

export default function Categories() {
    
    return (
        <div className='w-full grid grid-cols-5 gap-2 mt-4'>
            <div className='flex flex-col w-full space-y-1'>
                <div className='bg-cbColor h-10 rounded-xl flex items-center justify-center'>
                    <p className='text-xs text-white'>All</p>
                </div>
                <p className='text-[10px] text-center whitespace-nowrap overflow-hidden text-ellipsis'>All</p>
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <div className='bg-[#aa693325] h-10 rounded-xl flex items-center justify-center'>
                    <HotCoffee />
                </div>
                <p className='text-[10px] text-center whitespace-nowrap overflow-hidden text-ellipsis'>Coffee</p>
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <div className='bg-[#aa693325] h-10 rounded-xl flex items-center justify-center'>
                    <HotCoffee />
                </div>
                <p className='text-[10px] text-center whitespace-nowrap overflow-hidden text-ellipsis'>Non-Coffee</p>
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <div className='bg-[#aa693325] h-10 rounded-xl flex items-center justify-center'>
                    <HotCoffee />
                </div>
                <p className='text-[10px] text-center whitespace-nowrap overflow-hidden text-ellipsis'>Food</p>
            </div>
        </div>
    )
}
