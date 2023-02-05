
import {Routes, Route} from 'react-router-dom';

import { NoMatch } from './pages/NoMatch';
import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
import {Home} from './pages/home'
import { RenderProducts } from './pages/products';

export const AllRoutes = () => {
    return (
        <div className='my-3' 
            style={{
                minHeight: '300px'
            }}>
           <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='/products' index element={<RenderProducts />} /> 
              <Route path='/shopping-cart' element={<ShoppingCart />}/>

              {/* route მუშაობს დამთხვევების პრინციპით თუ ზემოთ არაფერი დაემთხვა მაშინ ჩამოდის ქვემოთ რა წერია მაგაზე, * ნიშნავს
                  რომ ყველაფერი მაინტერესებს  */}
              <Route path='*' element={ <NoMatch /> } />
            </Routes>
        </div>
    )
}
AllRoutes.displayName = 'AppRoutes';