import {ActionType, reducer} from './Stepper';

describe('Stepper reducer', () => {
    it('should return initial state', () => {
        const initialState = { count: 0 };

        const result = reducer(initialState, { type: ActionType.SET_VALUE });
        expect(result).toStrictEqual(initialState);
    })

    it('should increase value', () => {
        const initialState = { count: 0 };

        const result_add = reducer(initialState, { type: ActionType.INCREMENT });
        expect(result_add).toStrictEqual({ count: 1 });
    })

    it('should decrease value', () => {
        const initialState = { count: 10 };

        const result_add = reducer(initialState, { type: ActionType.DECREMENT });
        expect(result_add).toStrictEqual({ count: 9 });
    })

    it('should set value', () => {
        const initialState = { count: 0 };

        const result_add = reducer(initialState, { type: ActionType.SET_VALUE, payload: 10 });
        expect(result_add).toStrictEqual({ count: 10 });
    })
})
