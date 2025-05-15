import {AuthInfo} from "../components/Auth/AuthInfo.tsx";

export const HomePage = () => {
    return (
        <>
            <h1 className="dark:text-slate-300">Hello from HomePage!</h1>
            <AuthInfo/>
        </>
    );
}
