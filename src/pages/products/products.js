
import { useState } from 'react';
import productsData from '../../products.json'


export const ProductItem = ({ product }) => {
    return (
        <div>
            <h4>
                {product.name}, ღირებულება - ${product.price}
            </h4>
            <h6>
                {product.stock ? "მარაგშია" : "არ არის მარაგში"}, კატეგორია - {product.category}
            </h6>
        </div>
    );
};

export const RenderProducts = () => {

    const [inStockOnly, setInStockOnly] = useState(false);


    const dasabechdiProducts = () => {
        let data = productsData.slice();
        if ( inStockOnly ) {
            data = productsData.filter((item) => item.stock);
        }
        return   data.map((item, index) => {
            return <ProductItem product={item} key={index} />;
        });
    };


    return (
        <div className="row shadow my-3 p-3">
            <h3>Productss</h3>
            <button className="btn btn-outline-primary" onClick={() => setInStockOnly(!inStockOnly)}> მაჩვენე მარაგი </button>
            <hr />
            {dasabechdiProducts()}
        </div>
    );
};