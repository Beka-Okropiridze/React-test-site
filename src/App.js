import './App.css';


// import {Home} from './pages/home'
import { RenderProducts } from './pages/products';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';
import { Layout } from './components/layout/layout';



function App() {
  return (
    <Layout className="App">
      <Headeri/>
      <RenderProducts />
      {/* <Home /> */}
      <Footer />
    </Layout>
  );
}

export default App;
