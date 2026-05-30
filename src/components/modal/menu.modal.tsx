import { Branch, Cart, Logout, Orders, User } from '../../assets/iconify';

interface MenuModalProps {
    onClose: () => void;
    open: boolean;
}

export default function MenuModal({ onClose, open }: MenuModalProps) {

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-start">
            <div className="w-[350px] h-full bg-white shadow-xl animate-slide-left flex flex-col">
                <div className="flex justify-between items-center border-b py-4 px-3">
                    <h2 className="font-semibold text-sm">Juan Dela Cruz</h2>
                    <button onClick={onClose} className="text-sm rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200">✕</button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    <div className="border-b border-cbColorSecond relative rounded p-2.5 flex space-x-2.5 items-center">
                        <Branch color={'#3B2314'} size={23}/>
                        <div className='text-sm text-cbColorDark font-medium'>Home</div>
                    </div>
                    <div className="border-b border-cbColorSecond relative rounded p-2.5 flex space-x-2.5 items-center">
                        <Cart color={'#3B2314'} size={25}/>
                        <div className='text-sm text-cbColorDark font-medium'>Cart</div>
                    </div>
                    <div className="border-b border-cbColorSecond relative rounded p-2.5 flex space-x-2.5 items-center">
                        <Orders color={'#3B2314'} size={25}/>
                        <div className='text-sm text-cbColorDark font-medium'>Orders</div>
                    </div>
                    <div className="border-b border-cbColorSecond relative rounded p-2.5 flex space-x-2.5 items-center">
                        <User color={'#3B2314'} size={25}/>
                        <div className='text-sm text-cbColorDark font-medium'>Profile</div>
                    </div>
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
