
import {  useState } from 'react';
// import { useContext } from 'react'; //useContext(CartContxet) ჩავანაცვლე useCart-ით ვნახო Cartprovider-iბოლოში რაც მიწერია
// import { CartContext } from '../../providers/CartProvider';
import { useCart } from '../../providers/CartProvider';

import { Alert, Button } from '../../atoms';
import './Productitem.css';
import PropTypes from 'prop-types';

export const ProductItem = ({ product }) => {
    const {addNewItem,
           removeItem,
           cart: {
                items: cartItems               //items სახელს ვუცვლი cartItems-ით რო ლოგიკური სახელი ერქვას თორე იგივეს აბრუნებს
             },                                //რასაც აითემსი`
        } = useCart();

        const [outofStock, setOutofStock] = useState (false)
        
        const isInCart = product.id in cartItems;
        
        const handleAddtoCart = () => {
            if (product.stock) {
                addNewItem(product)
            }
            else {
                setOutofStock(true)
            }
        }
 
    return (
        <div className="card mb-2 productitem-card">
            <h5 className="card-header">
                {product.name}, ღირებულება - ${product.price}
            </h5>
            <div className="card-body">
            <div className='d-flex flex-column'>
            { outofStock && <Alert message='დამატება შეუძლებელია' /> }
                <h6>
                {product.stock ? "მარაგშია" : "არ არის მარაგში"}, კატეგორია - {product.category}
                </h6>
            </div>
                <h6 className='text-muted'>{ isInCart ? `კალათაში: ${cartItems[product.id].qty}ც` : `არ არის კალათაში` };</h6>
            <div className='btn-group'>
                <Button className="btn btn-outline-success" onClick={handleAddtoCart}>
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

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}; 