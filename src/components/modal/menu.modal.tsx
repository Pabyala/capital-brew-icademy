import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../assets/iconify';
import { subMenu } from '../data/capital-brew-data';
import SideBarMenuItem from '../grid-item/side-bar-menu.item';
import { selectModalSubShow, setClearModal, setModalSubShow } from '../../features/modals/modal-type.features.slice';
import ConfirmationModal from './confirmation.modal';
import CBLogo from '../../assets/images/capitalbrew-logos/capital brew logo.png'

export default function MenuModal() {

    const dispatch = useDispatch();
    const selectedModalSubShow = useSelector(selectModalSubShow);

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-start">
            <div className="w-[350px] h-full bg-white shadow-xl animate-slide-left flex flex-col space-y-4">
                <div className="flex justify-center items-center space-x-4 pt-8 px-3">
                    <div className='h-[45px] overflow-hidden flex'>
                        <img src={CBLogo} className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {subMenu.map((menu) => {
                        return (
                            <SideBarMenuItem key={menu.id} menu={menu}/>
                        )
                    })}
                </div>
                <div className="border-t p-4 flex flex-col">
                    <div className="flex justify-start items-center space-x-3 py-2">
                        <div className="flex items-center rounded space-x-2 text-lg font-semibold flex-shrink-0">
                            <button className="bg-cbColor text-white rounded-full p-1 transition cursor-pointer w-11 h-11 lg:w-10 lg:h-10">
                                JC
                            </button>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm text-gray-800 font-medium">
                                Juan Dela Cruz
                            </p>
                            <p className="truncate text-sm text-gray-700">
                                juandelacruz@gmail.com
                            </p>
                        </div>
                    </div>
                    <button onClick={() => dispatch(setModalSubShow('showSubLogout'))} className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-2 rounded text-sm">
                        <div className="flex items-center justify-center">
                            <Logout size={25} />
                        </div>
                        <p className="leading-none text-sm font-medium">Logout</p>
                    </button>
                </div>
            </div>
            <div onClick={() => dispatch(setClearModal({type: 'modalShow'}))} className="flex-1"/>
            {selectedModalSubShow === 'showSubLogout' && (
                <ConfirmationModal
                    onConfirm={() => dispatch(setClearModal({ type: 'modalSubShow' }))}
                    onClose={() => dispatch(setClearModal({ type: 'modalSubShow' }))}
                    modalTitle={`Logout Confirmation`}
                    modalContext={`Are you sure you want to logout?`}
                />
            )}
        </div>
    )
}
