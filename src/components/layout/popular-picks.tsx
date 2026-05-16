import React from 'react'
import { popularPickCoffee } from '../data/capital-brew-data'
import PopularCoffee from '../common/popular-coffee'

export default function PopularPicks() {
    return (
        <div className='w-full mt-4'>
            <p className='text-sm text-cbColor font-semibold mb-2'>
                Popular Picks
            </p>
            <div className='flex gap-3 overflow-x-auto scrollbar-hide pb-3'>
                {popularPickCoffee.map((coffee) => (
                    <PopularCoffee key={coffee.id} coffee={coffee}/>
                ))}
            </div>
        </div>
    )
}
