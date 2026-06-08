import { Branch, Cart, Orders, User } from "../../assets/iconify";

interface GetIconMenuProps {
    iconNo: number;
    iconColor?: string;
}

export default function GetIconMenu({iconNo, iconColor = '#3B2314'}: GetIconMenuProps) {
    switch (iconNo) {
        case 1:
            return <Branch color={iconColor} size={23}/>
        case 2:
            return <Cart color={iconColor} size={25}/>
        case 3: 
            return <Orders color={iconColor} size={25}/>
        case 4:
            return <User color={iconColor} size={25}/>
        default:
            return <Branch color={iconColor} size={23}/>
    }
}
