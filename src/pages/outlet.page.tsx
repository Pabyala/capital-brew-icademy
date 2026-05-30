import { useState } from 'react'
import Categories from '../components/layout/categories';
import PopularPicks from '../components/layout/popular-picks';
import AllDayFavorites from '../components/layout/all-day-favorites';
import SearchItems from '../components/layout/search-items';
import UserGreetings from '../components/layout/user-greeting';
import TypeOfBranch from '../components/layout/type-of-branch';
import AvailableCoffee from '../components/layout/available-coffee';
import ItemModal from '../components/modal/item.modal';
import LoadingPage from './loading.page';

export default function OutletPage() {

    const [activeTab, setActiveTab] = useState<'branchA' | 'branchB' | 'branchC' | 'branchD' | 'branchE'>('branchA');
    
    return (
        <div className="flex-1 container bg-white rounded py-3 pt-[60px]">
            <TypeOfBranch/>
            <UserGreetings/>
            <SearchItems/>
            <Categories/>
            <AvailableCoffee/>
            <ItemModal/>
            {/* <LoadingPage /> */}
            {/* <PopularPicks/>
            <AllDayFavorites/> */}
        </div>
    )
}