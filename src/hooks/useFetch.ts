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
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await res.json();
        setData(json);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
    