import { useEffect, useState } from "react";
import { ProductsList } from "../features/Products"
import { type ProductDto } from "../types/Product";
import { Text } from "../ui"
import { fetchProducts } from "../services/products";

export const ProductsPage = () => {
    const [data, setData] = useState<ProductDto[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //alternative:
    useEffect(() => {
        const loadData = async () => {
            try {
                const responseData = await fetchProducts();
                setData(responseData.records);
                setIsLoading(false);
            } catch {
                setIsError(true);
            }
        };
        loadData();
    }, []);

    // useEffect(() => {
    //     fetchProducts().then(responseData => setData(responseData.records))
    // }, []);

    return (
        <>
            <Text>Products List</Text>
            {isLoading && <p className="text-white">Loading...</p>}
            {isError && <p className="text-red-600">Oh no! Error!</p>}
            {data && <ProductsList products={data} />}
        </>
    )

}