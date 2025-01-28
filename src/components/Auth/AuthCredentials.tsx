import { type MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {

    const {isLoggedIn, toggleLoginState, logIn, logOut } = useAuthContext();
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        toggleLoginState();
    }

    return (
        <div>
            <p>Is user logged? {isLoggedIn ? 'Yes' : 'No'}</p>
            <p>Is user logged? {isLoggedIn && 'Yes'}</p>
            <button onClick={handleClick}>Toggle login state</button>
            <button onClick={logIn}>Log In!</button>
            <button onClick={logOut}>Log Out!</button>
        </div> 
    )
}
