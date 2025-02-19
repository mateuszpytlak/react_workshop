import { useAppSelector } from '../../hooks/redux';
import { selectCount } from './basketSlice';

export const Basket = () => {
    const count = useAppSelector(selectCount);
    
    return (
        <span className="dark:text-slate-300">
            {count}
        </span>
    )
}