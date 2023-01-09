import './header.css'

import { CartContext } from '../../providers/CartProvider';
import { useContext } from 'react';

export const Headeri = () => {
  const {cart} = useContext(CartContext); //cart-ამოვიღე CartContext ობიექტიდან ობიექტის დაშლის კონტექსტით{}
  console.log("__Cart__",cart);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>

              <li className="nav-item">
                <a className='nav-link' href='/'>
                  <span className='font-weight-bold'>CART TOTAL</span>:
                  <span>{cart.total === 0 ? 'Empty' : `💰${Math.round(cart.total)}`}</span>
                </a>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
