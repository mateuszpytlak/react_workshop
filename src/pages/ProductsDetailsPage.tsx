import { useEffect, useState } from "react";
// import { ProductsList } from "../features/Products"
import { type ProductDto } from "../types/Product";
import { Text } from "../ui"
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductDetails";
import { fetchProduct } from "../services/products";
import { useApi } from "../hooks/useApi";

export const ProductsDetailsPage = () => {
    const { id } = useParams();    
    // const [data, setData] = useState<ProductDto | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);

    const {data, isLoading, isError} = useApi<ProductDto>(() => fetchProduct(id));

    // useEffect(() => {
    //     if (id) {
    //         fetchProduct(id).then(responseData => {
    //             setData(responseData)
    //             setIsLoading(false);
    //         }).catch( () => {
    //             setIsError(true);
    //         })
    //     }
    // }, [id]);   

    return (
        <>
            <Text>Products List</Text>
            { isLoading && <p className="text-white">Loading...</p> }
            { isError && <p className="text-red-600">Oh no! Error!</p>}
            { data && <ProductsDetails product={data}/> }
        </>
    )

}