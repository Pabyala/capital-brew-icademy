import { BurgerMenu, Cart } from '../../assets/iconify'
import capitalBrewLogo from "../../assets/images/capitalbrew-logos/capital brew logo.png";

interface NavbarProps {
    openCart: () => void;
    openMenu: () => void;
}

export default function Navbar({ openCart, openMenu }: NavbarProps) {
    return (
        <div className='w-full flex justify-center items-center fixed bg-white shadow-md z-50'>
            <div className='container lg:px-8'>
                <div className='flex justify-between items-center h-[50px] lg:container'>
                    {/* LOGO */}
                    <div className='flex justify-between items-center w-full'>
                        <div onClick={openMenu} className='flex justify-center items-center'>
                            <BurgerMenu size={25}/>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <img
                                src={capitalBrewLogo} 
                                alt="Admin Dashboard"
                                className="h-[30px] md:h-[40px] w-auto object-contain"
                            />
                        </div>
                        <div onClick={openCart} className='relative flex justify-center items-center cursor-pointer'>
                            <Cart size={25}/>
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[16px] h-[16px] px-1 flex items-center justify-center rounded-full'>
                                3
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
