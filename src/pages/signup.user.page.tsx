import React, { useState } from 'react'
import { ShowToast } from '../utils/toastify.utils';
import Label from '../components/ui/label';
import Input from '../components/ui/input';
import EyeButton from '../components/ui/eye-button';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { selectCreateAccountBody, setCreateAccountCredential } from '../features/authentication/authentication.features.slice';
import { useDispatch, useSelector } from 'react-redux';
import { validateCreateAccount } from '../utils/validation/authentication.validation';
import HeaderLogin from '../components/login/header-login';
import PasswordRegex from '../components/error/password-regex'

export default function SignupUserPage() {

    const dispatch = useDispatch()
    const createAccountBody = useSelector(selectCreateAccountBody)
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const error = validateCreateAccount(createAccountBody);
        if (error) return ShowToast(error, "error");

        console.log("signup data:", createAccountBody);
    };

    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50'>
            <div className='container flex flex-col items-center justify-center h-full'>
                <div className='max-w-md lg:w-[400px] w-full'>
                    <HeaderLogin label='Create an account to get started.'/>
                    <div className='bg-white px-5 py-5 rounded shadow-lg'>
                        <form className='space-y-4' onSubmit={handleSignup}>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='space-y-1.5'>
                                    <Label label='First Name *' />
                                    <Input
                                        type='firstName'
                                        value={createAccountBody.firstName}
                                        onChange={(e) => dispatch(setCreateAccountCredential({ firstName: e.target.value }))}
                                        placeholder='John'
                                    />
                                </div>
                                <div className='space-y-1.5'>
                                    <Label label='Last Name *' />
                                    <Input
                                        type='lastName'
                                        value={createAccountBody.lastName}
                                        onChange={(e) => dispatch(setCreateAccountCredential({ lastName: e.target.value }))}
                                        placeholder='Doe'
                                    />
                                </div>
                            </div>
                            <div className='space-y-1.5'>
                                <Label label='Email *' />
                                <Input
                                    type='email'
                                    value={createAccountBody.email}
                                    onChange={(e) => dispatch(setCreateAccountCredential({ email: e.target.value }))}
                                    placeholder='example@gmail.com'
                                />
                            </div>
                            <div className='space-y-1.5'>
                                <Label label='Password *' />
                                <div className='relative'>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        value={createAccountBody.password}
                                        onChange={(e) => dispatch(setCreateAccountCredential({ password: e.target.value }))}
                                        placeholder='*******'
                                        maxLength={20}
                                        minLength={6}
                                    />
                                    <EyeButton
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        value={createAccountBody.password}
                                        isShowEye={showPassword}
                                    />
                                </div>
                                {createAccountBody.password && (
                                    <PasswordRegex password={createAccountBody.password}/>
                                )}
                            </div>
                            <div className='space-y-1.5'>
                                <Label label='Confirm Password *' />
                                <div className='relative'>
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={createAccountBody.confirmPassword}
                                        onChange={(e) => dispatch(setCreateAccountCredential({ confirmPassword: e.target.value }))}
                                        placeholder='*******'
                                        maxLength={20}
                                        minLength={6}
                                    />
                                    <EyeButton
                                        type='button'
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        value={createAccountBody.confirmPassword}
                                        isShowEye={showConfirmPassword}
                                    />
                                </div>
                            </div>
                            <Button type="submit" label='Create Account' />
                        </form>
                        <div className='text-center mt-5 text-sm lg:text-xs text-gray-600'>
                            <Link
                                to="/account/signin"
                                className='text-cbColor font-medium hover:underline'
                            >
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm lg:text-xs pt-[30px]'>
                    © {new Date().getFullYear()} PhilLife. All rights reserved.
                </p>
            </div>
        </div>
    );
}
