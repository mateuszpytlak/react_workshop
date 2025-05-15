import {fireEvent, render, screen} from "@testing-library/react";
import {RegistrationFormRefsHookFormWithValidation} from "./RegistrationFormRefsHookFormWithValidation.tsx";
import userEvent from "@testing-library/user-event";

describe('RegistrationFormRefsHookFormWithValidation', () => {
    let emailField: HTMLElement;
    let passwordField: HTMLElement;
    let languageField: HTMLElement;
    let submitButton: HTMLElement;

    const setup = () => {
        render(<RegistrationFormRefsHookFormWithValidation />);
        emailField = screen.getByLabelText(/E-mail/i);
        passwordField = screen.getByLabelText(/Password/i);
        languageField = screen.getByLabelText(/Language/i);
        submitButton = screen.getByRole('button', { name: /Send/i });
    };

    beforeEach(() => {
        setup();
    });

    it('should show error on invalid email with fireEvent', async () => {
        // Check if form fields are rendered
        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(languageField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        // Simulate invalid input
        fireEvent.change(emailField, { target: { value: 'aaa' }});
        fireEvent.change(passwordField, { target: { value: 'bbb' }});
        fireEvent.change(languageField, { target: { value: 'ccc' }});

        fireEvent.click(submitButton);

        expect(await screen.findByText(/Invalid e-mail/i)).toBeInTheDocument();
    });

    it('should show error on invalid email with userEvent', async () => {
        // Simulate invalid input
        await userEvent.type(emailField, 'aaa');
        await userEvent.type(passwordField, 'bbb');
        await userEvent.type(languageField, 'ccc');

        await userEvent.click(submitButton);

        expect(screen.getByText(/Invalid e-mail/i)).toBeInTheDocument();
    });
});
