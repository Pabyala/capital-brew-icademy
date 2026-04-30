import React, { useState } from 'react'
import { StreamlineFlexHome2Remix, TdesignLocation1Filled } from '../assets/iconify';

export default function OutletPage() {

    const [activeTab, setActiveTab] = useState<'branchA' | 'branchB' | 'branchC' | 'branchD' | 'branchE'>('branchA');

    return (
        <div className='h-screen flex flex-col bg-gray-100 pt-[50px]'>
            <div className='h-screen container mx-auto flex flex-col overflow-hidden bg-white'>
                <div className="lg:px-8 py-3 space-y-2 flex flex-col flex-1 overflow-y-auto">
                    {/* 🔹 Content */}
                    <div className="flex-1 bg-white rounded py-4">
                        <div className='flex space-x-2 items-center'>
                            <StreamlineFlexHome2Remix/>
                            <p className='text-sm lg:text-xs'>Capital Brew - Alabang</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
