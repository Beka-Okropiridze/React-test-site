import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [pousedvalue, setPousedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPousedValue(value)
        }, delay)
        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay])                                      //როცა value და delay შეიცვლება მაშინ გამოიძახება useEffect

    return pousedvalue;
};