import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './components/Auth/AuthContext.tsx';
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import { FormWizard } from './components/FormWizard/FormWizard';
// import {ViewPort} from "./components/ViewPort";
import { AuthInfo } from './components/Auth/AuthInfo.tsx';
import { ThemeContextProvider } from './components/Theme/ThemeContext.tsx';
import { router } from './routes.tsx';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";

function App() {
    return (
        <>
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

            <ErrorBoundary fallback={<p className="dark:text-slate-300">General error</p>}>
                <ThemeContextProvider>
                    {/* <ThemeSwitcher/> */}
                    <AuthContextProvider>
                        <RouterProvider router={router} />
                    </AuthContextProvider>
                    <ErrorBoundary>
                        <AuthInfo />
                    </ErrorBoundary>
                </ThemeContextProvider>
            </ErrorBoundary>
        </>
    )
}

export default App
