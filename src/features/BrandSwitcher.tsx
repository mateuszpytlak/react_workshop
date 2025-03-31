import { useContext } from "react"
import { BrandContext, BrandName } from "../components/BrandContext/BrandContext"

export const BrandSwitcher = () => {
    const brandContext = useContext(BrandContext);

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = event?.target.value as BrandName;
        if (brandContext) {
            brandContext.switchBrand(selectedBrand);
        }
    };

    return (
        <div className="my-4">
            <label htmlFor="brand-select" className="dark:text-slate-300">Select brand: </label>

            <select name="Brand select" id="html-select" onChange={handleBrandChange}>
                <option value="">--Please choose an option--</option>
                <option value={BrandName.WebAmigos}>{BrandName.WebAmigos}</option>
                <option value={BrandName.Intel}>{BrandName.Intel}</option>
                <option value={BrandName.Nvidia}>{BrandName.Nvidia}</option>
            </select>
        </div>
    )
}