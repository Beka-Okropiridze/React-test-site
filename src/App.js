import './App.css';


import {Home} from './pages/home'

import {Headeri} from './components/header/Header'
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App container">
      <Headeri/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
