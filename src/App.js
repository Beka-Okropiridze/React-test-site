import './App.css';


// import {Home} from './pages/home'
import { RenderProducts } from './pages/products';

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App container">
      <Headeri/>
      <RenderProducts />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
