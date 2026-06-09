import { GridiconsSearch } from '../../assets/iconify'
import Input from '../ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchValue, setSearchValue } from '../../features/orders/filter-orders.features.slice'

export default function SearchItems() {

    const dispatch = useDispatch()
    const searchValue = useSelector(selectSearchValue);

    return (
        <div className='relative w-full space-y-1.5 mt-3'>
            <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400'>
                <GridiconsSearch height={18} width={18}/>
            </div> 
            <Input
                className = 'block w-full text-[13px] lg:text-xs rounded border border-gray-300 px-3 py-2 pr-10 shadow-sm outline-none focus:border-black'
                type={'email'}
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder={'Search drinks or food...'}
            />
        </div>
    )
}
