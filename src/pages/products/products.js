
import { useState } from 'react';
import productsData from '../../products.json';

import { Button, TextInput } from '../../atoms';
// import { TextInput } from '../../atoms';

import { ProductItem } from './productitems';

export const RenderProducts = () => {

    const [inStockOnly, setInStockOnly] = useState(false);

    const [filterTerm, setFilterTerm] = useState('');


    const dasabechdiProducts = () => {
        let data = productsData.slice();
        if ( inStockOnly ) {
            data = productsData.filter((item) => item.stock);
            console.log(data);
        }
        return   data.map((item, index) => {
            return <ProductItem product={item} key={index} />;
        });
    };


    return (
        <div className="row shadow my-3 p-3">
            <h3>Productss</h3>
            <form>
                <div className='mb-3 row'>
                <h4> Filter - {filterTerm}</h4>
                    <div className='col-8'>
                        <TextInput 
                            value={filterTerm}
                            onChange={({target}) => {
                                setFilterTerm(target.value)
                            }}
                        />
                    </div>
                    <div className='col-4'>
                        <Button className="btn btn-outline-primary" onClick={() => setInStockOnly(!inStockOnly)} 
                                 text={inStockOnly ? "ყველა პროდუქტი" : "მარაგში მყოფი პროდუქტი"} 
                        />
                    </div>    
                </div>
            </form>
            <hr />
            {dasabechdiProducts()}
        </div>
    );
};