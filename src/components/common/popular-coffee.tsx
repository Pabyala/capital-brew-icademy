import React from 'react'

interface PopularCoffeeProps {
    coffee: any;
}

export default function PopularCoffee({ coffee }: PopularCoffeeProps) {
    return (
        <div className='w-[130px] bg-white rounded-xl shadow-sm flex-shrink-0 flex flex-col justify-between border '>
            <div>
                <div className='w-full h-20 bg-gray-200 rounded-t-lg' />
                <p className='text-[13px] font-medium break-words leading-tight pt-2 px-2'>
                    {coffee.coffeeName}
                </p>
            </div>
            <div className='px-2 pb-2'>
                <div className='grid grid-cols-2 mt-1'>
                <div className='flex justify-start items-center'>
                    <p className='text-[13px] text-gray-500'>{`₱${coffee.price}.00`}</p>
                </div>
                <div className='flex justify-end'>
                    <button className='w-5 h-5 flex items-center justify-center bg-[#aa693325] rounded-full border border-cbColor'>
                    +
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
