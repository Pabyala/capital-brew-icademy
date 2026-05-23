import OutletPage from './outlet.page';
import Navbar from '../components/layout/navbar';
import { useEffect, useState } from 'react';
import CartModal from '../components/modal/cart.modal';
import MenuModal from '../components/modal/menu.modal';

export default function POSPage() {

    const [openCart, setOpenCart] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <div className='min-h-screen'>
            <div className='h-screen flex flex-col bg-gray-100'>
                <Navbar 
                    openCart={() => setOpenCart(true)}
                    openMenu={() => setOpenMenu(true)}
                />
                <OutletPage/>
                {openMenu && (
                    <MenuModal
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                    />
                )}
                {openCart && (
                    <CartModal
                        open={openCart}
                        onClose={() => setOpenCart(false)}
                    />
                )}
            </div>
        </div>
    )
}