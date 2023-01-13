
import { createContext, useState } from "react";

export const CartContext = createContext({
    total: 0,
    items: {},
});
CartContext.displayName = 'CartContextProvider';

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        total: 0,
        items: {},
    });

    const addNewItem = (product) => {
        setCart((prev) => {
            // console.log('--blook--', prev);
            let newItem;
            if (prev.items[product.id]) {    //თუ აითემებში პროდუქტის აიდი არსებობს მაშინ პროდუქტის რაოდენობა გაიზარდოს ერთით
                const cartProduct = prev.items[product.id]; //აითემებში ანუ კალათაში!
                newItem = {
                    ...cartProduct,
                    qty: cartProduct.qty + 1,
                }
            }

            return {
                ...prev,
                total: prev.total + product.price,
            };
        });
    };

    const removeItem = (item) => {
        // setCart((prev) => {
        //     return {
        //         ...prev,
        //         total: prev.total - value,
        //     };
        // });
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

