import { KeyboardEventHandler, useReducer, useRef } from "react"
import { Button, Input, Text } from "../../ui"

type State = {
    count: number;
}

type Action = {
    type: ActionType,
    payload?: number,
}

export enum ActionType {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    SET_VALUE = 'set_value',
}


const initialState: State = { count: 0 };

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.DECREMENT:
            return { count: state.count - 1 };
        case ActionType.INCREMENT: 
            return { count: state.count + 1 };
        case ActionType.SET_VALUE:
            if (action.payload) {
                return {count: action.payload};
            } else {
                return state;
            }
        
        default: 
            return state;
    }
};

const decrement = () => ({ type: ActionType.DECREMENT });
const increment = () => ({ type: ActionType.INCREMENT });
const setValue = (value: number) => ({ type: ActionType.SET_VALUE, payload: value })

export const Stepper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputValueRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        console.log(event.code);
        if ((event.code === 'Enter' || event.code === 'NumpadEnter')  && inputValueRef.current) {
            dispatch(setValue(parseInt(inputValueRef.current.value, 10)))
        }
    }

    return (
        <div>
            <Text>Stepper Comp.</Text>

            <div className="flex justify-center my-3">
                <Button label="-" onClick={ () => dispatch(decrement()) } />
                    <div className="mx-4">
                        <Text>{ state.count }</Text>
                    </div>
                <Button label="+" onClick={ () => dispatch(increment()) }/>
            </div>
            <div>
                <Input ref={inputValueRef} label="Value" type="number" onKeyDown={handleKeyDown} />
            </div>
        </div>
    )
}
