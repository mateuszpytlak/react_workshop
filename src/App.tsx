import './App.css';
import { AuthContextProvider } from './components/Auth/AuthContext.tsx';
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import { FormWizard } from './components/FormWizard/FormWizard';
// import {ViewPort} from "./components/ViewPort";
import {AuthInfo} from "./components/Auth/AuthInfo.tsx";
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";

function App() {
    return (
        <>
            <div className="">
                {/*<Generator />*/}
                {/*<Counter />*/}
                {/*<RegistrationFormState />*/}
                {/*<RegistrationFormRefs />*/}
                {/*<RegistrationFormRefsHookForm />*/}
                {/*<RegistrationFormRefsHookFormWithValidation />*/}
                {/*<hr/>*/}

                {/*<ComponentGenerator />*/}
                {/*<FormWizard />*/}

                {/*<ViewPort />*/}

                <AuthContextProvider>
                    <AuthInfo />
                </AuthContextProvider>
            
            </div>
        </>
    )
}

export default App
