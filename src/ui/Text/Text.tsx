import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export function Text( { children }: Props) {
    return (
        <p className="dark:text-slate-300">{ children }</p>
    )
}