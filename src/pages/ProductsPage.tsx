import { useEffect, useState } from "react";
import { ProductsList } from "../features/Products"
import { type ProductDto } from "../types/Product";
import { Text } from "../ui"
import { fetchProducts } from "../services/products";

export const ProductsPage = () => {
    const [products, setProducts] = useState<ProductDto[]>([])

    useEffect(() => {
        fetchProducts().then(data => setProducts(data.records))
    }, []);

    return (
        <>
            <Text>Products List</Text>
            <ProductsList products={products} />
        </>
    )

}