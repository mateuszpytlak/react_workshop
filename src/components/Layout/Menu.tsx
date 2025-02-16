import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

type Props = {
    to: string;
    children: string;
}

const CustomLink = ({ to, children }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive ? 'text-red-700' : isPending ? 'text-yellow-600' : 'dark:text-slate-300'}
        >
            {children}
        </NavLink>
    )
}

export const Menu = () => {
    return (
        <div>
            <nav>
                <ul className="flex justify-center">
                    <li className="mr-2">
                        <CustomLink to={routes.HOME.path}>Home</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.COUNTER.path}>Counter</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.GENERATOR.path}>Generator</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.REGISTRATION.path}>Registration</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.STEPPER.path}>Stepper</CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}