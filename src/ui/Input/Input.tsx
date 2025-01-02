import {ComponentPropsWithRef, forwardRef, Ref, useId} from "react";
import {FieldError} from "react-hook-form";
import {cn} from "../../utils/cn.ts";

type Props = {
    label: string;
    error?: FieldError;
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef(({label, error, ...rest}: Props, ref: Ref<HTMLInputElement>) => {

    const id = useId();

    return (
        <div className="my-2">
            <label htmlFor={id} className="mr-2">{label}</label>
            <input id={id} ref={ref} {...rest} className={cn({'text-red-300 border-2 border-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-500': error})}/>
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
});