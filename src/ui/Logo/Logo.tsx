import { useContext } from "react"
import { BrandContext } from "../../components/BrandContext/BrandContext"

export const Logo = () => {
    const brandContext = useContext(BrandContext);

    return (
        <div>
            <p className="dark:text-slate-300">{brandContext?.brand.companyName}</p>
        </div>
    )
}