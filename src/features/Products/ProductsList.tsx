import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { ProductDto } from "../../types/Product";
import { Button } from "../../ui";
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
                                {/* <Text>{product.fields.name} - {product.fields.price} zł</Text> */}
                                <Link to={`/products/${product.id}`} className="dark:text-blue-500">{product.fields.name} - {product.fields.price} zł</Link>
                                <Button className="ml-2" label="+" onClick={ () => dispatch(add(product)) } />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}