import { useAppDispatch } from "../../hooks/redux";
import { ProductDto } from "../../types/Product";
import { Button, Text } from "../../ui";
import { add } from "./basketSlice";

type Props = {
    product: ProductDto;
}


export const ProductsDetails = ({ product }: Props) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Text>{product.fields.name} - {product.fields.price} zł</Text>
            <Button className="ml-2" label="+" onClick={() => dispatch(add(product))} />
        </>
    )
}