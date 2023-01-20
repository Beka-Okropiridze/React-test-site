
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
            if (prev.items[product.id]) {    //თუ აითემებში პროდუქტის აიდი არსებობს (პროდუქტი დამიმატებია) მაშინ პროდუქტის 
                const cartProduct = prev.items[product.id]; //რაოდენობა გაიზარდოს ერთით (აითემებში ანუ კალათაში)!
                newItem = {                      //items-ში მაქ განახლებული total და newItem ობიექტი რომელ ობიექტშიც price და qty-ია 
                    ...cartProduct,
                    qty: cartProduct.qty + 1,
                } 
            } else {
                newItem = {
                price: product.price,
                qty: 1
                }
            }

            return {
                ...prev,
                total: prev.total + product.price,
                items: {
                    ...prev.items,
                    [product.id]: newItem, // addNewItem რომ products იღებს იმ პროდუქტის აიდის გასწვრივ მექნება ობიექტი newItem
                }                          // რომელშიც მექნება დინამიურად (ყოველ კლიკზე კალათაში დამატებაზე) დათვლილი თვისება
            };                            // price: 2 ან რამე ფასი და qty: 1 an რამე რაოდენობა
        });
    };

    const removeItem = (product) => {
        setCart((prev) => {
            let newItem = { ...prev.items }; //თუ პროდუქტი არაა newItem-ს მაინც რომ ქონდეს განსაზღვრული მნიშვნელობა სთეითი რო არ
            let total = prev.total;          // გაგვიფუჭდეს მაგიტომ
            console.log('kk', total);
            if (prev.items[product.id]) {                          
                const cartProduct = prev.items[product.id];
            if (cartProduct.qty > 1) {
                newItem = {
                    ...prev.items,
                    [product.id]: {
                        ...cartProduct,
                        qty: cartProduct.qty - 1,
                    },
                };
            total -= product.price;
            } else {
              total -= product.price
              delete newItem[product.id]
            }
        }

            return {
                ...prev,
                total,
                items: newItem,
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

