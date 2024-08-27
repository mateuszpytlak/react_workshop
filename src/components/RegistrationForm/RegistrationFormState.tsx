import {Button} from "../../ui/Button/Button.tsx";
import {type ChangeEventHandler, FormEventHandler, useState} from "react";

type RegistrationFormData = {
    email: string;
    password: string;
    language: string;
}

export const RegistrationFormState = () => {

    const [formData, setFormData] = useState<RegistrationFormData>({
        email: '',
        password: '',
        language: '',
    });

    const {email, password, language} = formData;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        setFormData({
            ...formData,
            [id]: value,
        })
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        console.log(formData); //send to API
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Language: {language}</p>
            <div className="my-2">
                <label htmlFor="email" className="mr-2">E-mail</label>
                <input id="email" type="email" onChange={handleChange} value={email}/>
            </div>
            <div className="my-2">
                <label htmlFor="password" className="mr-2">Password</label>
                <input id="password" type="password" onChange={handleChange} value={password}/>
            </div>
            <div className="my-2">
                <label htmlFor="language" className="mr-2">Language</label>
                <input id="language" onChange={handleChange} value={language}/>
            </div>
            <Button label="Send" type="submit"></Button>
        </form>
    )
}