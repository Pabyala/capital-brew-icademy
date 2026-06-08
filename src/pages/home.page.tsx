import OutletPage from './outlet.page';
import Navbar from '../components/layout/navbar';
import { useState } from 'react';
import CartModal from '../components/modal/cart.modal';
import MenuModal from '../components/modal/menu.modal';

export default function POSPage() {

    const [openCart, setOpenCart] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <div className='min-h-screen'>
            <div className='h-screen mx-auto flex flex-col overflow-y-auto bg-white'>
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