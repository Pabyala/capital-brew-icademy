import { categories } from '../data/capital-brew-data'
import CBrewIconLogo from '../../assets/images/capitalbrew-logos/CB-LOGO-ICON.png'
import { DefaultData } from '../../interface/default.interface'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductCategoryId, setSelectProductCategory } from '../../features/orders/filter-orders.features.slice'

export default function Categories() {

    const dispatch = useDispatch()
    const selectedProductId = useSelector(selectProductCategoryId);

    return (
        <>
            <div className='mt-4 clear-start text-sm font-semibold pb-1'>Category</div>
            <div className='flex flex-wrap gap-2'>
                {categories.map((cat: DefaultData) => {
                    const isSelected = selectedProductId === cat.id
                    return (
                        <label
                            key={cat.id}
                            className={`flex items-center gap-2 px-2 py-1 rounded border cursor-pointer transition
                                ${isSelected ? 'border-cbColor bg-gray-50' : 'border-gray-200 hover:border-cbColor'}
                            `}
                        >
                            <input
                                type="radio"
                                name="coffee-size"
                                className="hidden"
                                checked={isSelected}
                                onChange={() => dispatch(setSelectProductCategory(cat))}
                            />
                            <div className={`text-sm font-medium flex space-x-1 items-center ${isSelected ? 'text-cbColor' : 'text-gray-700'}`}>
                                <img className="w-4 h-4" src={CBrewIconLogo} alt="" />
                                <div>{cat.name}</div>
                            </div>
                        </label>
                    )
                })}
            </div>
        </>
    )
}