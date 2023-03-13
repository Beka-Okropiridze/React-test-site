import { createContext, useContext } from "react"; //localStorage-ში უნდა შევინახო ტოკენ
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { loginAsync } from "../../api/auth.service";
import { useNavigate } from "react-router-dom";
import { HOME_PATH, LOGIN_PATH } from "../../utils";

export const authContext = createContext({});
authContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('super app: auth', false);
    const navigate = useNavigate();

    const login = async (credentials) => {
        // console.log('cre', credentials);
        const user = await loginAsync(credentials);
         console.log('user', user);
         if (user && user.token) {
            setUser(true)
            navigate(HOME_PATH)
         } else {
            setUser(false)
         }  
    };
    const register = async (credentials) => {};
    const logout = () => {
        setUser(false)
        navigate(LOGIN_PATH)
    };

    return <authContext.Provider value={{
            login,
            register,
            logout,
            user,
        }}>
             {children}
            </authContext.Provider>
}

export const useAuthProvider = () => {
    const auth = useContext(authContext);
    if (!auth) {
        throw SyntaxError('AuthProvider isnt defined')
    }
    return auth
};