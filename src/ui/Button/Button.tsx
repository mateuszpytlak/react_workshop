import { type ComponentProps } from "react";
import { cn } from "../../utils/cn"

type Props = {
    label: string;
    // onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<'button'>;

export function Button ( { label, className, disabled, ...rest }: Props ) {
    return (
        <button 
            className={cn(
                "px-4 py-1 text-sm text-white bg-blue-600 dark:bg-green-600 rounded-sm border cursor-pointer border-blue-200 hover:bg-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed", 
                className,
                {"bg-red-500": disabled}
            )}
            {...rest}
        >
            { label }
        </button>
    )
}
