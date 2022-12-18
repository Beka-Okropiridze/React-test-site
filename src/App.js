import './App.css';


// import {Home} from './pages/home'
import { renderProducts } from './pages/products/products';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App container">
      <Headeri/>
      <renderProducts />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
