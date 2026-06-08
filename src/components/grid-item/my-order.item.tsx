import { Arrow, MapLocation } from "../../assets/iconify";
import { getOrderStatusColor } from "../../utils/get-order-status-color";

interface MyOrderItemProps {
    order: any;
    onClick: (value: boolean) => void;
}

export default function MyOrderItem({ order, onClick }: MyOrderItemProps) {
    return (
        <div onClick={() => onClick(true)} className={`border border-gray-200 rounded-md p-3 flex justify-between items-center`}>
            <div className="space-y-1">
                <div className='text-sm font-medium text-gray-700'>{`ID: ${order.id}`}</div>
                <div className='text-xs'>{order.date}</div>
                <div className='flex space-x-1'>
                    <MapLocation size={14}/>
                    <p className="text-xs">{order.location}</p>
                </div>
            </div>
            <div className='flex space-x-4 items-center'>
                <div className='space-y-1 flex flex-col items-center'>
                    <div className={`px-2 py-1 rounded ${getOrderStatusColor(order.status)} text-xs capitalize`}>{order.status}</div>
                    <div className='text-sm text-gray-800'>{`Total: ₱${order.total}`}</div>
                </div>
                <div>
                    <Arrow className='rotate-[450deg]' size={17}/>
                </div>
            </div>
        </div>
    )
}
