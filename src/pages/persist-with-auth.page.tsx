import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import usePersist from '../hooks/use-persist';

export default function PersistWithAuthPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const [persist] = usePersist();
    const [isRefreshed, setIsRefreshed] = useState<boolean>(false);
    
    useEffect(() => {
        
    }, [])

    return <Outlet/>
}