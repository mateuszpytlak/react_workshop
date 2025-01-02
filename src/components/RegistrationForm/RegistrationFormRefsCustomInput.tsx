import {Button} from "../../ui/Button/Button.tsx";
import {FormEventHandler, useEffect, useRef} from "react";
import {Input} from "../../ui";

type RegistrationFormData = {
    email: string;
    password: string;
    language: string;
}

export const RegistrationFormRefsCustomInput = () => {

    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);
    const languageFieldRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        if (emailFieldRef.current) {
            emailFieldRef.current.focus();
        }
    }, []);

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        const data: RegistrationFormData = {
            email: emailFieldRef.current?.value || '',
            password: passwordFieldRef.current?.value || '',
            language: languageFieldRef.current?.value || '',
        }
        console.log(data); //send to API
    }


    return (
        <form onSubmit={handleSubmit}>
            <Input label="E-mail" ref={emailFieldRef} type="email" />
            <Input label="Password" ref={passwordFieldRef} type="password" />
            <Input label="Language" ref={languageFieldRef} />

            <Button label="Send" type="submit"></Button>
        </form>
    )
}