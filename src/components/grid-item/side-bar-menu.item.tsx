import { useNavigate } from 'react-router-dom'
import { Arrow } from '../../assets/iconify'
import GetIconMenu from '../common/get-icon-menu'
import { SubMenu } from '../data/capital-brew-data'
import { useDispatch } from 'react-redux'
import { setClearModal, setModalShow } from '../../features/modals/modal-type.features.slice'

interface SideBarMenuItemProps {
    menu: SubMenu
}

export default function SideBarMenuItem({ menu }: SideBarMenuItemProps) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (menu: SubMenu) => {
        // if(menu.id === 1) {
        //     dispatch(setClearModal({type: 'modalShow'}))
        //     return;
        // }
        if(menu.id === 2) {
            dispatch(setClearModal({type: 'modalShow'}))
            dispatch(setModalShow('showSideCard'))
            return;
        }
        if (menu.to) {
            navigate(menu.to);
            dispatch(setClearModal({type: 'modalShow'}))
            console.log("LINK: ", menu.to)
        }
    }

    return (
        <div onClick={() => handleClick(menu)} className="border-b border-cbColorSecond relative rounded p-2.5 flex justify-between items-center">
            <div className='flex space-x-2.5 items-center'>
                <GetIconMenu iconNo={menu.iconNo} />
                <div className='text-sm text-cbColorDark font-medium'>{menu.item}</div>
            </div>
            <div>
                <Arrow className='rotate-[450deg]' size={17}/>
            </div>
        </div>
    )
}
