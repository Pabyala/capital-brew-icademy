import { useState } from 'react';
import { myOrdersSummary } from '../components/data/capital-brew-data'
import NoOrderHistory from '../components/layout/no-order-history';
import OrderHeader from '../components/common/order-header';
import OrderFilterStatus from '../components/layout/order-filter-status';
import MyOrderItem from '../components/grid-item/my-order.item';
import TrackYourOrderModal from '../components/modal/track-your-order.modal';
import MyOrderFilterModal from '../components/modal/my-order-filter.modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalShow } from '../features/modals/modal-type.features.slice';
import { DefaultData } from '../interface/default.interface';
import { reorderTabs, selectActiveTab, selectTabs, setActiveTab } from '../features/orders/filter-orders.features.slice';

export default function MyOrders() {

    const dispatch = useDispatch()
    const selectedModalShow = useSelector(selectModalShow)
    const tabs = useSelector(selectTabs);
    const activeTab = useSelector(selectActiveTab);

    const handleTabClick = (tab: DefaultData) => {
        dispatch(setActiveTab(tab));
        dispatch(reorderTabs(tab));
    };

    return (
        <div className='h-screen flex flex-col bg-white'>
            <OrderHeader />
            <OrderFilterStatus
                tabs={tabs}
                activeTab={activeTab.name}
                onClick={handleTabClick}
            />
            <div className='flex-1 overflow-y-auto bg-gray-100'>
                <div className="container py-3 space-y-2 bg-white min-h-full">
                    {myOrdersSummary.length === 0 ? (
                        <NoOrderHistory/>
                    ) : (
                        myOrdersSummary.map((order) => {
                            return (
                                <MyOrderItem key={order.id} order={order}/>
                            )
                        })
                    )}
                </div>
            </div>
            {selectedModalShow === 'showOrderedSummary' && (<TrackYourOrderModal />)}
            {selectedModalShow === 'showFilterOrder' && (<MyOrderFilterModal />)}
        </div>
    )
}
