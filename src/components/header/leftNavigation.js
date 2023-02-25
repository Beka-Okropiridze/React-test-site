
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../providers/CartProvider';
import { useContext } from 'react';
import {HOME_PATH, PRODUCTS_PATH, SHOPPING_CART_PATH} from '../../utils'

export const LeftNavigation = () => {
    const { cart } = useContext(CartContext);
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to={HOME_PATH}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={PRODUCTS_PATH}>
                    Products
                </NavLink>
            </li>

            <li className="nav-item">
                <Link className='nav-link' to={SHOPPING_CART_PATH}>
                    <span className='font-weight-bold'>CART TOTAL</span>:
                    <span>{cart.total === 0 ? 'Empty' : `💰${Math.round(cart.total)}`}</span>
                </Link>
            </li>
        </ul>
    )
}