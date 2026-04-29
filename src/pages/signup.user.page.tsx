import React, { useState } from 'react'
import { ShowToast } from '../utils/toastify.utils';
import CBLogoLogIn from '../assets/images/capital brew logo.png'
import Label from '../components/ui/label';
import Input from '../components/ui/input';
import EyeButton from '../components/ui/eye-button';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { selectCreateAccountBody, setCreateAccountCredential } from '../features/authentication/authentication.features.slice';
import { useDispatch, useSelector } from 'react-redux';
import { validateCreateAccount } from '../utils/validation/authentication.validation';

export default function SignupUserPage() {

    const dispatch = useDispatch()
    const createAccountBody = useSelector(selectCreateAccountBody)
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const error = validateCreateAccount(createAccountBody);
        if (error) return ShowToast(error, "error");

        console.log("signup data:", createAccountBody);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4'>
            <div className='container flex flex-col items-center justify-center'>
                <div className='max-w-md w-full border rounded'>
                    <div className='text-center pt-4'>
                        <img
                            src={CBLogoLogIn}
                            alt="Capital Brew Logo"
                            className="mx-auto w-[300px] h-[120px] object-contain md:w-[310px] md:h-[130px]"
                        />
                        <p className='text-gray-600 pb-3 text-xs'>
                            Create an account to get started.
                        </p>
                    </div>
                    <div className='bg-white p-8'>
                        <form className='space-y-4' onSubmit={handleSignup}>
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
                                    <>
                                        {!passwordRegex.test(createAccountBody.password) ? (
                                            <span className="text-xs text-red-500 leading-tight">
                                                Must contain at least 6 characters, including uppercase, lowercase, and a number.
                                            </span>
                                        ) : (
                                            <span className="text-xs text-green-600 leading-tight">
                                                Password meets requirements
                                            </span>
                                        )}
                                    </>
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
                        <div className='text-center mt-5 text-xs text-gray-600'>
                            Already have an account?{" "}
                            <Link
                                to="/account/signin"
                                className='text-cbColor font-medium hover:underline'
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center text-xs pt-[30px]'>
                    © {new Date().getFullYear()} PhilLife. All rights reserved.
                </p>
            </div>
        </div>
    );
}
