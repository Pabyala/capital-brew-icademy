import React from 'react'
import { popularPickCoffee } from '../data/capital-brew-data'
import PopularCoffee from '../common/popular-coffee'
import IceCoffee from '../../assets/images/items/Image-4.png'

export default function AvailableCoffee() {
    return (
        <div className='w-full mt-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {popularPickCoffee.map((coffee) => (
                    <div key={coffee.id} className='relative bg-white p-3 rounded-lg shadow-sm border flex flex-col justify-between '>
                        <div>
                            <div className='w-full flex items-center justify-center'>
                                <div className="w-[100px] h-[100px] overflow-hidden rounded-t-lg flex">
                                    <img
                                        src={IceCoffee}
                                        alt={coffee.coffeeName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <p className='text-[13px] text-center font-medium break-words leading-tight pt-2'>
                                {coffee.coffeeName}
                            </p>
                        </div>
                        <p className='text-[13px] text-center text-gray-500'>{`₱${coffee.price}.00`}</p>
                        {/* <div className='px-2 pb-2'>
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
                        </div> */}
                        <div className='absolute right-3'>
                            <button className='w-6 h-6 flex items-center justify-center bg-[#aa693325] rounded-full border border-cbColor'>
                            +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
