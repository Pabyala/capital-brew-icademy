import { useState } from 'react'
import Categories from '../components/layout/categories';
import PopularPicks from '../components/layout/popular-picks';
import AllDayFavorites from '../components/layout/all-day-favorites';
import SearchItems from '../components/layout/search-items';
import UserGreetings from '../components/layout/user-greeting';
import TypeOfBranch from '../components/layout/type-of-branch';

export default function OutletPage() {

    const [activeTab, setActiveTab] = useState<'branchA' | 'branchB' | 'branchC' | 'branchD' | 'branchE'>('branchA');
    
    return (
        <div className='h-screen flex flex-col bg-gray-100 pt-[50px]'>
            <div className='h-screen container mx-auto flex flex-col overflow-hidden bg-white'>
                <div className="lg:px-8 space-y-2 flex flex-col flex-1 overflow-y-auto">
                    {/* <div className="flex-1 bg-white rounded py-4 px-2 lg:px-8"> */}
                    <div className="flex-1 bg-white rounded py-3 pr-2">
                        <TypeOfBranch/>
                        <UserGreetings/>
                        <SearchItems/>
                        <Categories/>
                        <PopularPicks/>
                        <AllDayFavorites/>
                    </div>
                </div>
            </div>
        </div>
    )
}