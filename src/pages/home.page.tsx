import OutletPage from './outlet.page';
import Navbar from '../components/layout/navbar';
import CartModal from '../components/modal/cart.modal';
import MenuModal from '../components/modal/menu.modal';
import { useSelector } from 'react-redux';
import { selectModalShow } from '../features/modals/modal-type.features.slice';

export default function POSPage() {

    const selectedModalShow = useSelector(selectModalShow)

    return (
        <div className='min-h-screen'>
            <div className='h-screen mx-auto flex flex-col overflow-y-auto bg-white'>
                <Navbar />
                <OutletPage/>
                {selectedModalShow === 'showSideMenu' && (<MenuModal />)}
                {selectedModalShow === 'showSideCard' && (<CartModal />)}
            </div>
        </div>
    )
}