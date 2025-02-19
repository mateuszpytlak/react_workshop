import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { RootState } from '../../store';
import { Button, Text } from '../../ui';
import { remove } from './basketSlice';

export const BasketList = () => {
    const productsList = useAppSelector((state: RootState) => state.basket.products);
    // const productsList = useSelector( (state: RootState) => state.basket.products )
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2 className="dark:text-slate-300">Produkty w koszyku:</h2>
            <ul>
                {productsList.map((product) => (
                    <li key={product.id} className="dark:text-slate-300 flex">
                        <Text>{product.name}</Text>
                        <Button label="-" className="ml-3" onClick={ () => dispatch(remove(product.id)) } />
                    </li>
                ))}
            </ul>
        </div>
    )
}