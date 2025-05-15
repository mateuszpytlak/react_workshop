import {fireEvent, render, screen} from "@testing-library/react";
import {AuthCredentials} from "./AuthCredentials.tsx";
import {AuthContextProvider} from "./AuthContext.tsx";

describe('AuthCredentials component', () => {
    it('should toggle values', () => {
        const { debug } = render(
            <AuthContextProvider>
                <AuthCredentials/>
            </AuthContextProvider>
        );

        expect(screen.getByText('Is user logged? No')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', {name: 'Toggle login state'}));
        //debug();
        expect(screen.getByText('Is user logged? Yes')).toBeInTheDocument();
    });
})
