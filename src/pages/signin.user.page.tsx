import React, { useState } from 'react'
import Input from '../components/ui/input';
import Label from '../components/ui/label';
import Button from '../components/ui/button';
import EyeButton from '../components/ui/eye-button';
import { ShowToast } from '../utils/toastify.utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginBody, setLoginCredential } from '../features/authentication/authentication.features.slice';
import { validateLogin } from '../utils/validation/authentication.validation';
import { Link } from 'react-router-dom';
import HeaderLogin from '../components/login/header-login';

export default function SigninUserPage() {

    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const loginBody = useSelector(selectLoginBody)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const error = validateLogin(loginBody)
        if (error) return ShowToast(error, "error");
        
        console.log("loginBody: ", loginBody)
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50'>
            <div className='container flex flex-col items-center justify-center h-full'>
                <div className='max-w-md lg:w-[400px] w-full'>
                    <HeaderLogin label='Welcome back! Please sign in to continue.'/>
                    <div className='bg-white px-5 py-5 rounded shadow-lg'>
                        <form className='space-y-4' onSubmit={handleLogin}>
                            <div className='space-y-1.5'>
                                <Label label='Email *' />
                                <Input
                                    type={'email'}
                                    value={loginBody.email}
                                    onChange={(e) => dispatch(setLoginCredential({ email: e.target.value }))}
                                    placeholder={'example@gmail.com'}
                                />
                            </div>
                            <div className='space-y-1.5'>
                                <Label label='Password *' />
                                <div className='relative'>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={loginBody.password}
                                        onChange={(e) => dispatch(setLoginCredential({ password: e.target.value }))}
                                        placeholder={'*******'}
                                        maxLength={20}
                                        minLength={6}
                                        autoComplete="current-password"
                                    />
                                    <EyeButton 
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        value={loginBody.password}
                                        isShowEye={showPassword}
                                    />
                                </div>
                            </div>
                            <Button type="submit" label='Sign In' />
                        </form>
                        
                        <div className="grid grid-cols-2 gap-1 items-center mt-5 text-sm lg:text-xs text-gray-600">
                            <div>
                                <Link to="/account/forgot-password" className="text-cbColor font-medium hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className='flex justify-end'>
                                <Link to="/account/signup" className="text-cbColor font-medium hover:underline">
                                    Don’t have an account?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm lg:text-xs pt-[30px]'>© {new Date().getFullYear()} PhilLife. All rights reserved.</p>
            </div>
        </div>
    )
}
