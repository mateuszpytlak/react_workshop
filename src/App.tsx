import './App.css';
import { AuthContextProvider } from './components/Auth/AuthContext.tsx';
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import { FormWizard } from './components/FormWizard/FormWizard';
// import {ViewPort} from "./components/ViewPort";
import { AuthInfo } from "./components/Auth/AuthInfo.tsx";
import { Stepper } from './components/Stepper';
import { ThemeContextProvider } from './components/Theme/ThemeContext.tsx';
import { ThemeSwitcher } from './components/Theme/ThemeSwitcher.tsx';
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

                <ThemeContextProvider>
                    {/* <ThemeSwitcher/> */}
                    <AuthContextProvider>
                        {/* <AuthInfo /> */}
                        <Stepper/>
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </>
    )
}

export default App
