import { useEffect, useState } from "react";

// Generic Fetch Hook
//data : API response
//loading : Spinner state
// error: error handling

export function useFetch<T>(url: string) {
    const [data, setData] = useState< T | null >(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null> (null)


useEffect (()=> {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)

    fetch(url)
    .then (res =>res.json())
    .then (data =>{
        setData(data)
        setError(null)

    })
    .catch(() =>setError("Failed to load data"))
    .finally(()=>setLoading(false))


}, [url])
return {data, error, loading}
}