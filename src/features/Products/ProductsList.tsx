import { useAppDispatch } from "../../hooks/redux";
import { Product } from "../../types/Product";
import { Button, Text } from "../../ui";
import { add } from "./basketSlice";

const productsMockup: Product[] = [
    { id: 1, name: 'Laptop', price: 3000, },
    { id: 2, name: 'Keyboard', price: 150, },
    { id: 3, name: 'Mouse', price: 70, }
];

export const ProductsList = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Text>Products List</Text>
            <ul>
                {
                    productsMockup.map((product) => {
                        return (
                            <li key={product.id} className="flex">
                                <Text>{product.name} - {product.price} zł</Text>
                                <Button className="ml-2" label="+" onClick={ () => dispatch(add(product)) } />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}