import { useEffect, useState } from "react";
import { ProductsList } from "../features/Products"
import { type ProductDto } from "../types/Product";
import { Text } from "../ui"

// const products: Product[] = [
//     { id: 1, name: 'Laptop', price: 3000, },
//     { id: 2, name: 'Keyboard', price: 150, },
//     { id: 3, name: 'Mouse', price: 70, }
// ];

export const ProductsPage = () => {
    const [products, setProducts] = useState<ProductDto[]>([])

    useEffect(() => {
        fetch('https://api.airtable.com/v0/appKe3OZRo2NXZKMu/products',
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
            .then(data => setProducts(data.records))
    }, []);

    return (
        <>
            <Text>Products List</Text>
            <ProductsList products={products} />
        </>
    )

}