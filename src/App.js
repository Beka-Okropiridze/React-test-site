
import './App.css';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';
import { Layout } from './components/layout/layout';

import { CartProvider } from './providers/CartProvider/CartProvider';
import { AllRoutes } from './Routes';




function App() {
  return (
    <CartProvider>
        <Layout className="App">
            <Headeri/>
            <AllRoutes />
            <Footer />
        </Layout>
    </CartProvider>
  );
}

export default App;
