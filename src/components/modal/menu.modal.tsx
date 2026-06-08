import { Logout } from '../../assets/iconify';
import { subMenu } from '../data/capital-brew-data';
import SideBarMenuItem from '../grid-item/side-bar-menu.item';

interface MenuModalProps {
    onClose: () => void;
    open: boolean;
}

export default function MenuModal({ onClose, open }: MenuModalProps) {

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-start">
            <div className="w-[350px] h-full bg-white shadow-xl animate-slide-left flex flex-col space-y-4">
                <div className="flex justify-center items-center space-x-4 pb-4 pt-8 px-3">
                    <div className='flex items-center rounded space-x-2 text-xl font-semibold'>
                        <button className="bg-cbColor text-white rounded-full p-1 transition cursor-pointer w-14 h-14 lg:w-10 lg:h-10">
                            {`JC`}
                        </button>
                    </div>
                    <div>
                        <p className="text-base text-gray-800 font-medium">{`Juan Dela Cruz`}</p>
                        <p className="text-sm text-gray-700">{`juandelacruz@gmail.com`}</p>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {subMenu.map((menu) => {
                        return (
                            <SideBarMenuItem key={menu.id} menu={menu}/>
                        )
                    })}
                </div>
                <div className="border-t p-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                        <div className="flex items-center justify-center">
                            <Logout size={25} />
                        </div>
                        <p className="leading-none text-sm font-medium">Logout</p>
                    </button>
                </div>
            </div>
            <div onClick={onClose} className="flex-1"/>
        </div>
    )
}
