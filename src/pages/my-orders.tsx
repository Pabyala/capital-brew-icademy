import { useState } from 'react';
import { myOrdersSummary } from '../components/data/capital-brew-data'
import NoOrderHistory from '../components/layout/no-order-history';
import OrderHeader from '../components/common/order-header';
import OrderFilterStatus from '../components/layout/order-filter-status';
import MyOrderItem from '../components/grid-item/my-order.item';
import TrackYourOrderModal from '../components/modal/track-your-order.modal';
import MyOrderFilterModal from '../components/modal/my-order-filter.modal';

export default function MyOrders() {

    const [showOrderSummary, setShowOrderSummary] = useState<boolean>(false)
    const [showFilter, setShowFilter] = useState<boolean>(false)

    const defaultTabs = [
        "All",
        "Pending",
        "Preparing",
        "Ready",
        "Completed",
    ];
    const [tabs, setTabs] = useState(defaultTabs);
    const [activeTab, setActiveTab] = useState("All");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);

        setTabs(() => {
            const reordered = [
                tab, ...defaultTabs.filter((t) => t !== tab),
            ];
            return reordered;
        });
    };

    return (
        <div className='h-screen flex flex-col bg-white'>
            <OrderHeader onClick={setShowFilter}/>
            <OrderFilterStatus
                tabs={tabs}
                activeTab={activeTab}
                onClick={handleTabClick}
            />
            <div className='flex-1 overflow-y-auto bg-gray-100'>
                <div className="container py-3 space-y-2 bg-white min-h-full">
                    {myOrdersSummary.length === 0 ? (
                        <NoOrderHistory/>
                    ) : (
                        myOrdersSummary.map((order) => {
                            return (
                                <MyOrderItem onClick={setShowOrderSummary} key={order.id} order={order}/>
                            )
                        })
                    )}
                </div>
            </div>
            {showOrderSummary && (<TrackYourOrderModal onClick={setShowOrderSummary}/>)}
            {showFilter && (<MyOrderFilterModal onClick={setShowFilter}/>)}
        </div>
    )
}
