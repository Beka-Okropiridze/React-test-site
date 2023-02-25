import './header.css'

import { Link } from 'react-router-dom';
import { LeftNavigation } from './leftNavigation';
import { RightNavigation } from './rightNavigation';

export const Headeri = () => {
  // const { cart } = useContext(CartContext); //cart-ამოვიღე CartContext ობიექტიდან ობიექტის დაშლის კონტექსტით{}
  // console.log("__Cart__", cart);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/err">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <LeftNavigation />
          <RightNavigation />

          </div>
        </div>
      </nav>
    </header>
  );
};
