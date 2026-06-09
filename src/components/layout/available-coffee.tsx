import { popularPickCoffee } from '../data/capital-brew-data'
import IceCoffee from '../../assets/images/items/Image-4.png'
import ItemModal from '../modal/item.modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalShow, setClearModal, setModalShow } from '../../features/modals/modal-type.features.slice';

export default function AvailableCoffee() {

    const dispatch = useDispatch();
    const selectedModalShow = useSelector(selectModalShow);
    const handleClose = () => {
        dispatch(setClearModal({type: 'modalShow'}))
    };

    return (
        <div className='w-full mt-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {popularPickCoffee.map((coffee) => (
                    <div onClick={() => dispatch(setModalShow('showSelectedProduct'))} key={coffee.id} className='relative bg-white p-3 rounded-lg shadow-sm border flex flex-col justify-between '>
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
                        <div className='absolute right-3'>
                            <button className='w-6 h-6 flex items-center justify-center bg-[#aa693325] rounded-full border border-cbColor'>
                            +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedModalShow === 'showSelectedProduct' && (<ItemModal handleClose={handleClose}/>)}
        </div>
    )
}
