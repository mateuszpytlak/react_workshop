import { useAppDispatch } from "../../hooks/redux";
import { ProductDto } from "../../types/Product";
import { Button, Text } from "../../ui";
import { add } from "./basketSlice";

type Props = {
    products: ProductDto[];
}


export const ProductsList = ({ products }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id} className="flex">
                                <Text>{product.fields.name} - {product.fields.price} zł</Text>
                                <Button className="ml-2" label="+" onClick={ () => dispatch(add(product)) } />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}