import { useEffect, useState } from 'react'

export default function usePersist() {
    const [persist, setPersist] = useState<boolean>(true); 

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist]);

    return [persist, setPersist] as const;
}
