import { useEffect, useState } from "react";
// import { ProductsList } from "../features/Products"
import { type ProductDto } from "../types/Product";
import { Text } from "../ui"
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductDetails";

export const ProductsDetailsPage = () => {
    const { id } = useParams();    

    const [product, setProduct] = useState<ProductDto | null>(null)

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/appKe3OZRo2NXZKMu/products/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
                }
            }
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Invalid response')
            })
            .then(data => setProduct(data))
    }, [id]);   

    return (
        <>
            <Text>Products List</Text>
            { product && <ProductsDetails product={product}/> }
        </>
    )

}