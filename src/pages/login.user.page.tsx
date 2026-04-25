import React, { useState } from 'react'
import CBLogoLogIn from '../assets/images/capital brew logo.png'
import Input from '../components/ui/input';
import Label from '../components/ui/label';
import Button from '../components/ui/button';
import EyeButton from '../components/ui/eye-button';
import { ShowToast } from '../utils/toastify.utils';

export default function LoginUserPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email && !password) {
            return ShowToast('Email and password are required', 'error');
        }

        if (!email) {
            return ShowToast('Email is required', 'error');
        }

        if (!password) {
            return ShowToast('Password is required', 'error');
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4'>
            <div className='container flex flex-col items-center justify-center'>
                <div className='max-w-md w-full border rounded'>
                    <div className='text-center pt-4'>
                        <img
                            src={CBLogoLogIn}
                            alt="Capital Brew Logo" 
                            className="mx-auto w-[300px] h-[120px] object-contain md:w-[310px] mdLh-[130px]"
                        />
                        <p className='text-gray-600 pb-3 text-xs'>Fresh coffee and warm bread, just a tap away.</p>
                    </div>
                    <div className='bg-white p-8'>
                        <form className='space-y-4' onSubmit={handleLogin}>
                            <div className='space-y-1.5'>
                                <Label label='Email *' />
                                <Input
                                    type={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={'example@gmail.com'}
                                />
                            </div>
                            <div className='space-y-1.5'>
                                <Label label='Password *' />
                                <div className='relative'>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={'*******'}
                                        maxLength={20}
                                        minLength={6}
                                        autoComplete="current-password"
                                    />
                                    <EyeButton 
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        value={password}
                                        isShowEye={showPassword}
                                    />
                                </div>
                            </div>
                            <Button type="submit" label='Sign In' />
                        </form>
                    </div>
                </div>
                <p className='text-center text-xs pt-[30px]'>© {new Date().getFullYear()} PhilLife. All rights reserved.</p>
            </div>
        </div>
    )
}
