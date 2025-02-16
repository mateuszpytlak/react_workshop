import {useEffect, useState} from "react";

export const Counter = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {

        const id = setInterval(() => {
            setCount((value) => value + 1)
        }, 1000)
        console.log('in use');

        return () => {
            console.log('unmount/clear interval');
            clearInterval(id);
        }
    }, []);

    return (
        <div className="dark:text-slate-300">{count}</div>
    )
}