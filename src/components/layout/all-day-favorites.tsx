import { allDayCoffee } from '../data/capital-brew-data'
import AllDayCoffee from '../common/all-day-coffee'

export default function AllDayFavorites() {
    return (
        <div className='w-full mt-4'>
            <p className='text-sm text-cbColor font-semibold mb-2'>
                All Day Favorites
            </p>
            <div className='space-y-3'>
                {allDayCoffee.map((coffee) => (
                    <AllDayCoffee key={coffee.id} coffee={coffee}/>
                ))}
            </div>
        </div>
    )
}