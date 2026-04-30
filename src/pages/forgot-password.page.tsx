import { Link } from 'react-router-dom'
import Label from '../components/ui/label'
import Input from '../components/ui/input'
import { MdiEmailCheck } from '../assets/iconify'
import { ShowToast } from '../utils/toastify.utils'
import { useDispatch, useSelector } from 'react-redux'
import { selectResetPasswordBody, setResetPasswordBody } from '../features/authentication/authentication.features.slice'
import Button from '../components/ui/button'

export default function ForgotPasswordPage() {

    const dispatch = useDispatch()
    const resetPasswordBody = useSelector(selectResetPasswordBody)

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!resetPasswordBody) {
            return ShowToast("Email is required", "error");
        }
        
        console.log("Send email: ", resetPasswordBody)
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50'>
            <div className='container flex flex-col items-center justify-center h-full'>
                <div className='max-w-md lg:w-[400px] w-full border'>
                    <div className='text-center pt-4 px-5 space-y-2'>
                        <div className='flex items-center justify-center'>
                            <MdiEmailCheck height={90} width={90}/>
                        </div>
                        <p className='text-gray-600 text-sm lg:text-xs'>
                            Just need to confirm your email to send you instructions to reset your password..
                        </p>
                    </div>
                    <div className='bg-white p-8'>
                        <form className='space-y-4' onSubmit={handleSignup}>
                            <div className='space-y-1.5'>
                                <Label label='Email *' />
                                <Input
                                    type='email'
                                    value={resetPasswordBody}
                                    onChange={(e) => dispatch(setResetPasswordBody(e.target.value))}
                                    placeholder='example@gmail.com'
                                />
                            </div>
                            <Button type="submit" label='Reset Password' />
                        </form>
                        <div className='text-center mt-5 text-sm lg:text-xs text-gray-600'>
                            <Link to="/account/signin" className='text-cbColor font-medium hover:underline'>
                                Back to sign in ?
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm lg:text-xs pt-[30px]'>
                    © {new Date().getFullYear()} PhilLife. All rights reserved.
                </p>
            </div>
        </div>
    )
}
