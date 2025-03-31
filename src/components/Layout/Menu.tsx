import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { Basket } from "../../features/Products/basket";

type Props = {
    to: string;
    children: React.ReactNode;
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
                    <li className="mr-2">
                        <CustomLink to={routes.BRAND_SWITCHER.path}>Brand Switcher</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.PRODUCTS.path}>Products</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to={routes.BASKETLIST.path}><Basket /></CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}