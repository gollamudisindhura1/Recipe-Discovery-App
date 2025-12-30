import { useState } from "react";

// Syncs state with localStorage


export function useLocalStorage<T>(key:string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(()=>{
        try{
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch{
        return initialValue
    }
})

    const setValue = (Value: T) =>{
        setStoredValue(Value)
        localStorage.setItem(key, JSON.stringify(Value))
    }

    return[storedValue, setValue] as const

}