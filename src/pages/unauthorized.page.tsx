import { Link, useNavigate } from 'react-router-dom'
import { MaterialSymbolsLightCloudLockRounded } from '../assets/iconify'

export default function UnauthorizedPage() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <div className='flex items-center justify-center'>
                    <MaterialSymbolsLightCloudLockRounded height={150} width={150}/>
                </div>
                <div className='space-y-1'>
                    <h2 className="text-2xl font-semibold text-gray-800">
                    Unauthorized Access
                    </h2>
                    <p className="text-sm text-gray-600">
                        You don’t have permission to view this page.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
                    <button
                        onClick={handleGoBack}
                        className="px-3 py-1.5 text-sm bg-gray-200 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                    >
                        Go Back
                    </button>
                    <Link
                        to="/login"
                        className="px-3 py-1.5 text-sm bg-cbColor text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
