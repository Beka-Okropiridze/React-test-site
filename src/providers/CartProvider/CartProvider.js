
import { createContext, useState } from "react";

export const CartContext = createContext({
    total: 0,
});
CartContext.displayName = 'CartContextProvider';

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        total: 0,
    });

    const addNewItem = (value) => {
        setCart((prev) => {
            return {
                ...prev,
                total: prev.total + value,
            };
        });
    };

    const removeItem = (value) => {
        setCart((prev) => {
            return {
                ...prev,
                total: prev.total - value,
            };
        });
    }

    return <CartContext.Provider value={{
        cart,
        addNewItem,
        removeItem,
    }}
    >
        {children}
    </CartContext.Provider>
}