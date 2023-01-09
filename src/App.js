import './App.css';


// import {Home} from './pages/home'
import { RenderProducts } from './pages/products';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';
import { Layout } from './components/layout/layout';

import { CartProvider } from './providers/CartProvider/CartProvider';



function App() {
  return (
    <CartProvider>
        <Layout className="App">
            <Headeri/>
            <RenderProducts />
            {/* <Home /> */}
            <Footer />
        </Layout>
    </CartProvider>
  );
}

export default App;
