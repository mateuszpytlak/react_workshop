import { type MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";
import { Button, Text } from "../../ui";

export const AuthCredentials = () => {

    const { isLoggedIn, toggleLoginState, logIn, logOut } = useAuthContext();
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        toggleLoginState();
    }

    return (
        <div>
            <Text>Is user logged? {isLoggedIn ? 'Yes' : 'No'}</Text>
            <Text>Is user logged? {isLoggedIn && 'Yes'}</Text>
            <Button label={ 'Toggle login state' } onClick={handleClick} />
            <Button label={ 'Log In!' } onClick={logIn} />
            <Button label={ 'Log Out! '} onClick={logOut} />
        </div> 
    )
}
