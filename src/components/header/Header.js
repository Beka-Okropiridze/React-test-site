import './header.css'

import { CartContext } from '../../providers/CartProvider';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Headeri = () => {
  const {cart} = useContext(CartContext); //cart-ამოვიღე CartContext ობიექტიდან ობიექტის დაშლის კონტექსტით{}
  console.log("__Cart__",cart);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <Link className='nav-link' to='/cart'>
                  <span className='font-weight-bold'>CART TOTAL</span>:
                  <span>{cart.total === 0 ? 'Empty' : `💰${Math.round(cart.total)}`}</span>
                </Link>
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
