
import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { NoMatch } from './pages/NoMatch';
import {Home} from './pages/home';
import { Loader } from './atoms';
// import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
const ShoppingCart = lazy(() => import('./pages/shoppingCart'))
// import { RenderProducts } from './pages/products';
const RenderProducts = lazy(() => import('./pages/products'))

export const AllRoutes = () => {
    return (
        <div className='my-3' 
            style={{
                minHeight: '300px'
            }}>
           <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='/products' index element={
                <Suspense fallback={ <Loader message='Products Loading...' />}>
                    <RenderProducts />
                </Suspense>
              } /> 
              <Route path='/shopping-cart' element={
                <Suspense fallback={<Loader message='Shopping-cart Loading' />}>
                    <ShoppingCart />
                </Suspense>
              }/>

              {/* route მუშაობს დამთხვევების პრინციპით თუ ზემოთ არაფერი დაემთხვა მაშინ ჩამოდის ქვემოთ რა წერია მაგაზე, * ნიშნავს
                  რომ ყველაფერი მაინტერესებს  */}
              <Route path='*' element={ <NoMatch /> } />
            </Routes>
        </div>
    )
}
AllRoutes.displayName = 'AppRoutes';