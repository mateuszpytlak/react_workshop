import {ComponentPropsWithRef, forwardRef, Ref} from "react";

type Props = {
    name: string
} & ComponentPropsWithRef<'select'>;
export const Select = forwardRef( ({name, ...rest}: Props, ref: Ref<HTMLSelectElement>) => {

    return (
        <div className="my-4">
            <label htmlFor="html-select">Choose an element: </label>

            <select ref={ref} {...rest} name={name} id="html-select">
                <option value="">--Please choose an option--</option>
                <option value="button">Button</option>
                <option value="text">Text</option>
                <option value="header">Header</option>
            </select>
        </div>
    )
});
