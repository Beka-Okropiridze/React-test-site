
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

import { Button } from '../../atoms';
import './Productitem.css'

export const ProductItem = ({ product }) => {
    const {addNewItem,
           removeItem,
           cart: {
                items: cartItems
             },
        } = useContext(CartContext);
        
        const isInCart = product.id in cartItems;
        
    return (
        <div className="card mb-2 productitem-card">
            <h4 className="card-header">
                {product.name}, ღირებულება - ${product.price}
            </h4>
            <div className="card-body">
                <h6>
                    {product.stock ? "მარაგშია" : "არ არის მარაგში"}, კატეგორია - {product.category}
                </h6>
                <h6 className='text-muted'>{ isInCart ? `კალათაში: ${cartItems[product.id].qty}ც` : `არ არის კალათაში` }</h6>
            <div className='btn-group'>
                <Button className="btn btn-outline-success" onClick={()=> addNewItem(product)}>
                    Add to Card🛒
                </Button>
                <Button className="btn btn-outline-danger" onClick={()=> removeItem(product)} disabled={!isInCart}>
                    Remove Product😒
                </Button>
            </div>
            </div>
        </div>
    );
};