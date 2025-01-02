import {Button} from "../../ui";
import {useForm, type SubmitHandler} from "react-hook-form";
import {Input} from "../../ui";
import {zodResolver} from '@hookform/resolvers/zod';
import {type RegistrationFormData, validationSchema} from "./types.ts";

// type RegistrationFormData = {
//     email: string;
//     password: string;
//     language: string;
// }



export const RegistrationFormRefsHookFormWithValidation = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm<RegistrationFormData>({
        resolver: zodResolver(validationSchema)
    });

    const watchedFields = watch(['email', 'password'])
    const [email, password] = watchedFields;

    const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (data) => {
        console.log(data); //send to API
    }

    return (
        <form onSubmit={handleSubmit(handleRegistrationForm)}>
            <p>E-mail: {email}, password: {password}</p>
            <Input label="E-mail" {...register('email')} error={errors.email} type="email" />
            <Input label="Password" {...register('password')} error={errors.password}  type="password" />
            <Input label="Language" {...register('language')} error={errors.language}/>
            <Button label="Send" type="submit"></Button>
        </form>
    )
}