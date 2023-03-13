
import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import {Login} from './pages/login';
import {Register} from './pages/register';
import { Profile } from './pages/profile';
import { NoMatch } from './pages/NoMatch';
import {Home} from './pages/home';
import { Loader } from './atoms';
import { Layout } from './components/layout/layout';

import * as routes from './utils/routePaths';

// import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
const ShoppingCart = lazy(() => import('./pages/shoppingCart'))
// import { RenderProducts } from './pages/products';
const RenderProducts = lazy(() => import('./pages/products'))


export const AllRoutes = () => {
    return (
           <Routes>
              <Route element={<Layout />}>{/*ეს როუტი ქვედა როუტების მშობელია მაგიტომ არ აქვს path. როუტინგის ახალი ფუნქციონალია */}                                                
                <Route path={routes.HOME_PATH} index element={<Home />} />
                <Route path={routes.PRODUCTS_PATH} element={
                    <Suspense fallback={ <Loader message='Products Loading...' />}>
                        <RenderProducts />
                    </Suspense>
                } /> 
                <Route path={routes.SHOPPING_CART_PATH} element={
                    <Suspense fallback={<Loader message='Shopping-cart Loading' />}>
                        <ShoppingCart />
                    </Suspense>
                }/>
                <Route path={routes.PROFILE_PATH} element={<Profile />} />
                <Route path={routes.LOGIN_PATH} element={<Login />} />
                <Route path={routes.REGISTER_PATH} element={<Register />} />
                {/* route მუშაობს დამთხვევების პრინციპით თუ ზემოთ არაფერი დაემთხვა მაშინ ჩამოდის ქვემოთ რა წერია მაგაზე, * ნიშნავს
                    რომ ყველაფერი მაინტერესებს  */}
                <Route path={routes.NO_MATCH_PATH} element={ <NoMatch /> } />
              </Route>
            </Routes>
    )
}
AllRoutes.displayName = 'AppRoutes';