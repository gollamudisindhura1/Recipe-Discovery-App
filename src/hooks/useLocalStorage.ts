import { useState } from "react";

// Syncs state with localStorage
//Allows function like setFavorites(prev => ...)
type SetValue<T> = T | ((prev: T) => T);
export function useLocalStorage<T>(key:string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(()=>{
        try{
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch{

        console.warn(`Error reading localStorage key "${key}"`);
        return initialValue
    }
})

    const setValue = (value: SetValue<T>) =>{
     try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(`Error saving to localStorage key "${key}"`, err);
    }
  };

    return[storedValue, setValue] as const

}