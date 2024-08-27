import './App.css';
// import {Generator} from "./components/Generator";
// import {Counter} from "./components/Counter";
import {RegistrationFormRefs, RegistrationFormState} from "./components/RegistrationForm";

function App() {

    return (
        <>
            {/*<Generator />*/}
            {/*<Counter />*/}
            <RegistrationFormState />
            <RegistrationFormRefs />
        </>
    )
}

export default App
