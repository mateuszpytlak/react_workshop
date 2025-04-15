import {Button} from "../../ui";
import {useForm, type SubmitHandler} from "react-hook-form";
import {Input} from "../../ui";
import {zodResolver} from '@hookform/resolvers/zod';
import { type CreateProductDto, createProductSchema } from "../../types/Product.ts";

type Props = {
    onSubmit: (data: CreateProductDto) => void,
}

export const CreateProductForm = ( {onSubmit}: Props ) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateProductDto>({
        resolver: zodResolver(createProductSchema)
    });


    const handleRegistrationForm: SubmitHandler<CreateProductDto> = (data) => {
        onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(handleRegistrationForm)}>
            <Input label="Name" {...register('name')} error={errors.name} />
            <Input label="Description" {...register('description')} error={errors.description} />
            <Input label="Price" {...register('price', { valueAsNumber: true })} error={errors.price} type="number" />
            <Button label="Send" type="submit"></Button>
        </form>
    )
}
