import React from 'react'
import { Branch, StreamlineFlexHome2Remix } from '../../assets/iconify'
import { Link } from 'react-router-dom'

export default function TypeOfBranch() {
    return (
        <div className='flex space-x-2 items-center'>
            {/* <StreamlineFlexHome2Remix/> */}
            <Branch color='#AA6833'/>
            <Link to={'/cb-branch'} className='border-b border-cbColor'>
                <p className='text-sm lg:text-xs text-cbColor'>Capital Brew - Alabang</p>
            </Link>
        </div>
    )
}
