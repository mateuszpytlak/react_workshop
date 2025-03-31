import { createContext, useContext, useState } from "react";

type BrandContextType = {
    brand: Brand;
    switchBrand: (brandName: BrandName) => void;
}

export enum BrandName {
    WebAmigos = "Web Amigos",
    Intel = "Intel",
    Nvidia = "nVidia",
}

type Brand = {
    companyName: BrandName;
    logoUrl: string;
    colors: {
        primary: string;
        secondary: string;
        bgColor: string;
    }
}

const webAmigosBrand: Brand = {
    companyName: BrandName.WebAmigos,
    logoUrl: 'https://example.com',
    colors: {
        primary: "#F00",
        secondary: "#0f0",
        bgColor: "#00f",
    }
}

const intelBrand: Brand = {
    companyName: BrandName.Intel,
    logoUrl: 'https://example.com',
    colors: {
        primary: "#F00",
        secondary: "#0f0",
        bgColor: "#00f",
    }
}

const nvidiaBrand: Brand = {
    companyName: BrandName.Nvidia,
    logoUrl: 'https://example.com',
    colors: {
        primary: "#F00",
        secondary: "#0f0",
        bgColor: "#00f",
    }
}

// Mapa marek dla łatwiejszego przełączania
const brandMap: Record<BrandName, Brand> = {
    [BrandName.WebAmigos]: webAmigosBrand,
    [BrandName.Intel]: intelBrand,
    [BrandName.Nvidia]: nvidiaBrand,
};

export const useBrandContext = () => {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error("useBrand must be used within a BrandProvider");
    }
    return context;
};

export const BrandContext = createContext<BrandContextType | undefined>(undefined);

const useBrand = () => {
    const [brand, setBrand] = useState<Brand>(webAmigosBrand);

    const switchBrand = (brandName: BrandName) => {
        setBrand(brandMap[brandName] || webAmigosBrand)
    };

    return { brand, switchBrand };
}

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
    const { brand, switchBrand } = useBrand();

    return (
        <BrandContext.Provider value={{ brand, switchBrand}}>
            {children}
        </BrandContext.Provider>
    )
}