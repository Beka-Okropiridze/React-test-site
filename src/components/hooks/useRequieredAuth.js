import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../providers/authProvider/authProvider";
import { REGISTER_PATH } from "../../utils";


export const useRequireAuth = (redirecturl = REGISTER_PATH) => {
    const {user} = useAuthProvider();
    const navigate = useNavigate();


    useEffect(() => {
        if (!user) {
            navigate(redirecturl)
        }
    }, [user,navigate,redirecturl] );

    return user;
};