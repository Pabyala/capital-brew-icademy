import { useState } from 'react'
import { categories } from '../data/capital-brew-data'
import CBrewIconLogo from '../../assets/images/capitalbrew-logos/CB-LOGO-ICON.png'

export default function Categories() {

    const [selectedSize, setSelectedSize] = useState<number | null>(null)

    return (
        <>
            <div className='mt-4 clear-start text-sm font-semibold pb-1'>Category</div>
            <div className='flex flex-wrap gap-2'>
                {categories.map((cat) => {
                    const isSelected = selectedSize === cat.id
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
                                onChange={() => setSelectedSize(cat.id)}
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