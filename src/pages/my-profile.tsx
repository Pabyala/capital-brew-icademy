import React, { useState } from 'react'
import { Arrow } from '../assets/iconify'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateAccountBody, setCreateAccountCredential } from '../features/authentication/authentication.features.slice'
import PasswordRegex from '../components/error/password-regex'
import EyeButton from '../components/ui/eye-button'
import { useNavigate } from 'react-router-dom'

export default function MyProfile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const myAccount = useSelector(selectCreateAccountBody)

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    

    return (
        <div className='h-screen flex flex-col bg-white'>
            {/* HEADER */}
            <div className='container bg-white pt-4 border-b pb-3'>
                <div className='grid grid-cols-3 gap-2 items-center'>
                    <div onClick={() => navigate(-1)} className="justify-self-start self-center">
                        <Arrow size={20} className="rotate-[270deg]" />
                    </div>
                    <div className='text-base font-medium text-center'>My Profile</div>
                    
                </div>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <div className='flex items-center justify-center mt-8'>
                        <div className='flex items-center rounded space-x-2 text-2xl font-semibold'>
                            <button className="bg-cbColor text-white rounded-full p-1 transition cursor-pointer w-16 h-16 lg:w-10 lg:h-10">
                                {`JC`}
                            </button>
                        </div>
                    </div>
                    <div className='container space-y-3.5 mt-11'>
                        <div className='space-y-1.5'>
                            <Label label='First Name *' />
                            <Input
                                type='firstName'
                                value={myAccount.firstName}
                                onChange={(e) => dispatch(setCreateAccountCredential({ firstName: e.target.value }))}
                                placeholder='John'
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <Label label='Last Name *' />
                            <Input
                                type='lastName'
                                value={myAccount.lastName}
                                onChange={(e) => dispatch(setCreateAccountCredential({ lastName: e.target.value }))}
                                placeholder='Doe'
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <Label label='Email *' />
                            <Input
                                type='email'
                                value={myAccount.email}
                                onChange={(e) => dispatch(setCreateAccountCredential({ email: e.target.value }))}
                                placeholder='example@gmail.com'
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <Label label='Password *' />
                            <div className='relative'>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    value={myAccount.password}
                                    onChange={(e) => dispatch(setCreateAccountCredential({ password: e.target.value }))}
                                    placeholder='*******'
                                    maxLength={20}
                                    minLength={6}
                                />
                                <EyeButton
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    value={myAccount.password}
                                    isShowEye={showPassword}
                                />
                            </div>
                            {myAccount.password && (
                                <PasswordRegex password={myAccount.password}/>
                            )}
                        </div>
                        <div className='space-y-1.5'>
                            <Label label='Confirm Password *' />
                            <div className='relative'>
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={myAccount.confirmPassword}
                                    onChange={(e) => dispatch(setCreateAccountCredential({ confirmPassword: e.target.value }))}
                                    placeholder='*******'
                                    maxLength={20}
                                    minLength={6}
                                />
                                <EyeButton
                                    type='button'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    value={myAccount.confirmPassword}
                                    isShowEye={showConfirmPassword}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-cbColor text-white py-3 rounded text-sm">
                        {/* <div className="flex items-center justify-center">
                            <Logout size={25} />
                        </div> */}
                        <p className="leading-none text-sm font-medium">Save</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
