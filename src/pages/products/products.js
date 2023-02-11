
import { useState } from 'react';
import productsData from '../../products.json';

// import debounce from 'lodash/debounce';

import { Button, TextInput, Forma } from '../../atoms';
import { useLocalStorage } from '../../components/hooks/useLocalStorage';

import { ProductItem } from './productitems';
import { Collapseable } from '../../components/collapseabale';

export const RenderProducts = () => {

    const [inStockOnly, setInStockOnly] = useState(false);

    const [filterTerm, setFilterTerm] = useLocalStorage('filter-term', ''); //useState ჰუკია ანარეკლით uselocalStorage-ში(ჩემ ჰუკში)



    const dasabechdiProducts = () => {
        let data = productsData.slice();
        if ( inStockOnly ) {
            data = data.filter((item) => item.stock);
            console.log(data);
        }

        if(filterTerm && filterTerm.length > 2 ) {      //რახან ცარიელი სტრინგი აღიქმება ფოლსად filterTermსაც ვამოწმებ
            data = data.filter( (el) => el.name.includes(filterTerm) ); //რახან filter აბრუნებს მასივს დატას დუბლირებაslice აღარ უნდა
        }  

        return   data.map((item, index) => {
            return <ProductItem product={item} key={index} />;
        });
    };



    return (
        <div className="row shadow my-3 p-3">
            <h3>Productss</h3>
            <Forma>
                <div className='mb-3 row'>
                    {/* <h4> Filter - {filterTerm}</h4> */}
                    <div className='col-8'>
                        <TextInput 
                            value={filterTerm}
                            onChange={({target}) => {
                                setFilterTerm(target.value)
                            }}
                            placeholder='ძიება...'
                        />
                    </div>
                    <div className='col-4'>
                        <Button className="btn btn-outline-primary" onClick={() => setInStockOnly(!inStockOnly)}>
                                 {/* text=   */} {inStockOnly ? "😒ყველა პროდუქტი*" : "👌მარაგში მყოფი პროდუქტი"}
                       </Button>
                    </div>    
                </div>
            </Forma>
            <hr />
            <Collapseable closedtitle='მაჩვენე პროდუქცია' openedtitle='დამალე პროდუქცია' className='App'>
            <div className='d-flex flex-wrap justify-content-center'>
            {dasabechdiProducts()}
            </div>
            </Collapseable>
        </div>
    );
};