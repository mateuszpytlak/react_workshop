import {useViewPort} from "../../hooks/useViewPort.ts";

export const ViewPort = () => {
    // const size = useViewPort();

    const { x, y } = useViewPort();

    return (
        <div>
            {/*<p>X: {size.x}, Y: {size.y}</p>*/}
            <p>X: {x}, Y: {y}</p>
        </div>
    )
}
