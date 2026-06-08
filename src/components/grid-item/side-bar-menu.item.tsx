import { Arrow } from '../../assets/iconify'
import GetIconMenu from '../common/get-icon-menu'

interface SideBarMenuItemProps {
    menu: any
}

export default function SideBarMenuItem({ menu }: SideBarMenuItemProps) {

    const iconNo = Number(menu.iconNo)

    return (
        <div key={menu.id} className="border-b border-cbColorSecond relative rounded p-2.5 flex justify-between items-center">
            <div className='flex space-x-2.5 items-center'>
                <GetIconMenu iconNo={iconNo} />
                <div className='text-sm text-cbColorDark font-medium'>{menu.item}</div>
            </div>
            <div>
                <Arrow className='rotate-[450deg]' size={17}/>
            </div>
        </div>
    )
}
