import { useState } from "react";

export const useLocalStorage = ( key, initialvalue ) => {

    const [storedValue, setStoredValue] = useState(() => {
        if(typeof window === 'undefined') {            //თუ ისეთ გარემოში(სერვერული გარემო node.js ან რამე) გამოიყენეს useLocalStorage
            return initialvalue;                        //რომ window არ არსებობს მაშინ დააბრუნებს initialValues
        }; 
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialvalue;                       //null-იშ ოპერატორი ქვია ორი კითხვის ნიშანი
        }
        catch(error) {                             //try-ში წერ სარისკო კოდს თუ რამე არასწორად წავიდა გადადის catch-ში
            console.log('useLocalStorage--useState', error);
            return initialvalue;
        };
    });
     
    const setValue = (newValue) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue;
            setStoredValue(valueToStore)
            if(typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        }
        catch (error) {
            console.log('useLocalStorage--setValue', error);
        }
    }

    return [storedValue,setValue];
};