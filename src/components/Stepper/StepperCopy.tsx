import { KeyboardEventHandler, useReducer, useRef } from "react"
import { Button, Input, Text } from "../../ui"

type State = {
    count: number,
}

type Action = {
    type: ActionType,
    payload?: number,
}

enum ActionType {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    SET_VALUE = 'SET_VALUE',
}

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.INCREASE:
            return { count: state.count + 1 };
        case ActionType.DECREASE:
            return { count: state.count - 1 };
        case ActionType.SET_VALUE:
            console.log(action.payload);
            
            if (action.payload) {
                return { count: action.payload };
            } else {
                return state;
            }
        default:
            return state;
    }
}

export const StepperCopy = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: KeyboardEventHandler = (event) => {            
        if (event.code === 'Enter' && inputRef.current) {           
            dispatch({ type: ActionType.SET_VALUE, payload: parseInt(inputRef.current.value, 10) });
        }
    }

    return (
        <>
            <br />
            <hr />
            <br />
            <div className="flex justify-center">

                <Button label="-" onClick={() => { dispatch({ type: ActionType.DECREASE }) }} />
                <div className="mx-3">
                    <Text>{state.count}</Text>
                </div>
                <Button label="+" onClick={() => { dispatch({ type: ActionType.INCREASE }) }} />
                <br />
            </div>
            <Input ref={inputRef} label="Value" onKeyDown={handleKeyDown} />
        </>

    )
}
