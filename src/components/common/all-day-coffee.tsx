import React from 'react'

interface AllDayCoffeeProps {
    coffee: any
}

export default function AllDayCoffee({ coffee }: AllDayCoffeeProps) {
    return (
        <div className='border flex items-center justify-between bg-white p-1 rounded-xl shadow-sm w-full'>
            <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-gray-200 rounded-lg shrink-0' />
                <div className='flex flex-col space-y-0'>
                    <p className='text-[13px] font-medium'>{coffee.coffeeName}</p>
                    <p className='text-[13px] text-gray-500'>{`₱${coffee.price}.00`}</p>
                </div>
            </div>
            <div className='pr-2'>
                <button className='w-7 h-7 flex items-center justify-center bg-[#aa693325] rounded-full hover:opacity-80 transition border border-cbColor'>
                    +
                </button>
            </div>
        </div>
    )
}
