
import { useEffect } from "react"
import { Loader } from "../../atoms";
import { useRequireAuth } from "../../components/hooks";
import { ProductTable } from "../../components/table/ProductTable";



export const ShoppingCart = () => {
    
    const auth = useRequireAuth();
    console.log('auth', auth); 
    // useEffect(() => {
    //     console.log('shopping-cart');
    // }) განმარტება 21-1 ჩემ რეაქტის დოქში

    // useEffect(() => {
    //     console.log('shopp-cart');
    // }, []) 21-2

    // useEffect(() => {
    //     console.log('Request Started');
    //     const timerId = setTimeout(() => {
    //         console.log('Request Finished');
    //         setValue(Math.random())
    //     },3000);
    //     return () => {
    //         clearTimeout = timerId
    //     }
    // },[]) 21-3

    useEffect(() => {
        console.log('Ajax Request, Started');
        const timerId = setTimeout(() => {
            console.log('Ajax Request, Finished');
        }, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, []);


    if (!auth) {
        return <Loader />
    }

    return (
        <div className="row">
            <h2>Shopping Cart 🛒</h2>
            <div className="col-12">
                <ProductTable  />
            </div>
        </div>
    )
}