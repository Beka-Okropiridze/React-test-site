import { createContext, useContext } from "react"; //localStorage-ში უნდა შევინახო ტოკენ
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { loginAsync } from "../../api/auth.service";

export const authContext = createContext({
    total: 0,
    items: {},
});
authContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('super app: auth', false);

    const login = async (credentials) => {
        const user = await loginAsync(credentials);
         console.log('user', user);
         if (user && user.token) {
            setUser(true)
         } else {
            setUser(false)
         }  
    };
    const register = async (credentials) => {};
    const logout = () => {
        setUser(false)
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