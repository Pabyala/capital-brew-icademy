import { Cart } from '../../assets/iconify'

export default function NoOrderHistory() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <Cart color='#d1d5db' size={80}/>
            <div className="text-base text-gray-600 mt-2 font-medium">
                No orders yet
            </div>
            <p className='text-sm text-gray-400'>Hit the button down below to create an order</p>
            <button className="mt-4 text-sm uppercase px-4 py-1.5 border border-cbColor text-cbColor rounded">
                Browse Menu
            </button>
        </div>
    )
}
