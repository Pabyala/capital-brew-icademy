import { Arrow, Filter } from "../../assets/iconify";

interface OrderHeaderProps {
    onClick: (value: boolean) => void;
}

export default function OrderHeader({ onClick }: OrderHeaderProps) {
    return (
        <div className='container bg-white pt-4 border-b pb-3'>
            <div className='grid grid-cols-3 gap-2 items-center'>
                <div className="justify-self-start self-center">
                    <Arrow size={20} className="rotate-[270deg]" />
                </div>
                <div className='text-base font-medium text-center'>My Order</div>
                <div className='justify-self-end'>
                    <div onClick={() => onClick(true)} className='flex items-center space-x-1 border py-1 px-2 rounded'>
                        <Filter color='#AA6833' size={18}/>
                        <div className='text-xs text-[#AA6833]'>Filter</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
