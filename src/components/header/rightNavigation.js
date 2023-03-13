import { NavLink } from "react-router-dom";
import { useAuthProvider } from "../../providers/authProvider/authProvider";
import {LOGIN_PATH, REGISTER_PATH, PROFILE_PATH} from '../../utils';
import { Button } from "../../atoms";

export const RightNavigation = () => {

    const {user, logout} = useAuthProvider();

    const renderGuestNavLink = () => {

        return(
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" to={LOGIN_PATH}>
                        Login⇒
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={REGISTER_PATH}>
                        Register🔧
                    </NavLink>
                </li>
            </>
        )
    };

    const renderUserNavLink = () => {
        return(
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" to={PROFILE_PATH}>
                        Profile👤
                    </NavLink>
                </li>
                <li className="nav-item">
                    <Button className='btn btn-link nav-link' onClick={logout}>Log Out</Button>
                </li>
            </>
        )
    }
    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            { user ? renderUserNavLink() : renderGuestNavLink() }
        </ul> 
    )
};