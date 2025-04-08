import {Button} from "../../ui";
import {useForm, type SubmitHandler} from "react-hook-form";
import {Input} from "../../ui";
import {zodResolver} from '@hookform/resolvers/zod';
import { type CreateProductDto, createProductSchema } from "../../types/Product.ts";

export const CreateProductForm = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateProductDto>({
        resolver: zodResolver(createProductSchema)
    });

    const watchedFields = watch(['email', 'password'])
    const [email, password] = watchedFields;

    const handleRegistrationForm: SubmitHandler<CreateProductDto> = (data) => {
        console.log(data); //send to API
    }

    return (
        <form onSubmit={handleSubmit(handleRegistrationForm)}>
            <Input label="Name" {...register('name')} error={errors.name} />
            <Input label="Description" {...register('description')} error={errors.description} />
            <Input label="Price" {...register('price')} error={errors.price} type="number" />
            <Button label="Send" type="submit"></Button>
        </form>
    )
}
