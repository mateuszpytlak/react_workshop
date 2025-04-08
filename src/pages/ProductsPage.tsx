// import { useEffect, useState } from "react";
import { ProductsList } from "../features/Products"
import { Text } from "../ui"
import { type ProductDto } from "../types/Product";
import { type AirtableListResponse, fetchProducts } from "../services/products";
import { useApi } from "../hooks/useApi";
import { CreateProductPage } from "./CreateProductPage";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const ProductsPage = () => {
    // const [data, setData] = useState<ProductDto[] | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    const {data, isLoading, isError} = useApi<AirtableListResponse<ProductDto[]>>(fetchProducts);

    // //alternative:
    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const responseData = await fetchProducts();
    //             setData(responseData.records);
    //             setIsLoading(false);
    //         } catch {
    //             setIsError(true);
    //         }
    //     };
    //     loadData();
    // }, []);

    // useEffect(() => {
    //     fetchProducts().then(responseData => setData(responseData.records))
    // }, []);

    return (
        <>
            <Text>Products List</Text>
            {isLoading && <p className="text-white">Loading...</p>}
            {isError && <p className="text-red-600">Oh no! Error!</p>}
            <div>
                <Link to={routes.CREATE_PRODUCT.path} className="text-blue-500">Create product</Link>
            </div>
            {data && <ProductsList products={data.records} />}
        </>
    )

}