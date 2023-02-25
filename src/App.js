import './App.css';

import { CartProvider } from './providers/CartProvider/CartProvider';
import { AllRoutes } from './Routes';

function App() {
  return (
    <CartProvider>
      <AllRoutes />
    </CartProvider>
  );
}

export default App;
