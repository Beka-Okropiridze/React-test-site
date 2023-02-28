import './App.css';
import { AuthProvider } from './providers/authProvider/authProvider';

import { CartProvider } from './providers/CartProvider/CartProvider';
import { AllRoutes } from './Routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AllRoutes />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
