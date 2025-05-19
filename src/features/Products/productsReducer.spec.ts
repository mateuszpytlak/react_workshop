import { type BasketState, add, remove } from "./basketSlice.ts";
import { ProductDto } from "../../types/Product.ts";
import { store } from "../../store";

describe('productsReducer', () => {
    it('should return the initial state', () => {
        const initialState: BasketState = {
            products: [],
        };
        expect(store.getState().basket).toEqual(initialState);
    })

    it('should return changed values', () => {
        const mockProduct: ProductDto = {
            id: 'qwerty',
            fields: {
                name: 'polonez',
                description: 'Product 1 description',
                price: 123,
                created_at: new Date(),
                updated_at: new Date(),
            }
        }

        expect(store.getState().basket.products.length).toBe(0);

        store.dispatch(add(mockProduct));
        store.dispatch(add(mockProduct));
        expect(store.getState().basket.products.length).toBe(2);

        store.dispatch(remove('abc'));
        expect(store.getState().basket.products.length).toBe(2);

        store.dispatch(remove(mockProduct.id));
        expect(store.getState().basket.products.length).toBe(0);
    })
})
