
import {Routes, Route } from 'react-router-dom';

import './App.css';

import {Home} from './pages/home'
import { RenderProducts } from './pages/products';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';
import { Layout } from './components/layout/layout';

import { CartProvider } from './providers/CartProvider/CartProvider';
import { NoMatch } from './pages/NoMatch';



function App() {
  return (
    <CartProvider>
        <Layout className="App">
            <Headeri/>
            <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='/products' index element={<RenderProducts />} /> 

              {/* route მუშაობს დამთხვევების პრინციპით თუ ზემოთ არაფერი დაემთხვა მაშინ ჩამოდის ქვემოთ რა წერია მაგაზე * ნიშნავს
                  რომ ყველაფერი მაინტერესებს  */}
              <Route path='*' element={ <NoMatch /> } />
              </Routes>
            <Footer />
        </Layout>
    </CartProvider>
  );
}

export default App;
