import React from 'react'
import { Branch, StreamlineFlexHome2Remix } from '../../assets/iconify'

export default function TypeOfBranch() {
    return (
        <div className='flex space-x-2 items-center'>
            {/* <StreamlineFlexHome2Remix/> */}
            <Branch color='#AA6833'/>
            <p className='text-sm lg:text-xs'>Capital Brew - Alabang</p>
        </div>
    )
}
