import { v4 as uuidv4 } from "uuid";
import {Text} from "../../ui/Text/Text.tsx";
import {Button} from "../../ui/Button/Button.tsx";
import {type MouseEventHandler, useState} from "react";

export const Generator = () => {

    const [id, setId] = useState(uuidv4());

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        setId(uuidv4());
    }

    return (
        <div>
            <Text>
                { id }
            </Text>
            <Button label="Refresh" onClick={handleClick}></Button>
        </div>
    )
}