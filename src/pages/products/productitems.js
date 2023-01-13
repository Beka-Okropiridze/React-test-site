
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

import { Button } from '../../atoms';
import './Productitem.css'

export const ProductItem = ({ product }) => {
    const {addNewItem, removeItem} = useContext(CartContext);
    return (
        <div className="card mb-2 productitem-card">
            <h4 className="card-header">
                {product.name}, ღირებულება - ${product.price}
            </h4>
            <div className="card-body">
                <h6>
                    {product.stock ? "მარაგშია" : "არ არის მარაგში"}, კატეგორია - {product.category}
                </h6>
                <Button className="btn btn-outline-success" onClick={()=> addNewItem(product)}>
                    Add to Card🛒
                </Button>
            </div>
        </div>
    );
};