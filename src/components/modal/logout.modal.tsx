import React from 'react'
import { useDispatch } from 'react-redux'
import { setClearModal } from '../../features/modals/modal-type.features.slice'

export default function LogoutModal() {

    const dispatch = useDispatch()

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4'>
            <div className="w-full max-w-4xl bg-white rounded overflow-hidden shadow max-h-[90vh] my-auto flex flex-col">
                <div className='relative bg-white p-5 space-y-6 rounded-xl shadow-sm flex flex-col max-h-[90vh] justify-between '>
                    <div className='space-y-3'>
                        <div className='text-base font-semibold'>Logout Confirmation</div>
                        <div>
                            <p className='text-sm'>Are you sure you want to logout?</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <button className='text-sm gap-2 bg-cbColor p-2 rounded text-white'>Confirm</button>
                        <button onClick={() => dispatch(setClearModal({ type: 'modalSubShow' }))} className='text-sm gap-2 p-2 rounded text-cbColor border border-cbColor'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
