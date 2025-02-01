import { createContext, useContext, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    toggleLoginState: () => void;
    logIn: () => void;
    logOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = "LoginStateContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error(
            "Oh no! Component inside should be placed inside AuthContextProvider"
        );
    }
    return context;
};

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLoginState = () => setIsLoggedIn((value) => !value);
    const logIn = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);

    return { isLoggedIn, toggleLoginState, logIn, logOut };
};

export const AuthContextProvider = ({ children, }: { children: React.ReactNode; }) => {
    const { isLoggedIn, toggleLoginState, logIn, logOut } = useAuth();

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, toggleLoginState, logIn, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};
