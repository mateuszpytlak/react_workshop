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
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeSwitcher } from './components/Theme/ThemeSwitcher.tsx';
import { Provider as ReduxAppProvider } from 'react-redux';
// import {ComponentGenerator} from "./components/ComponentGenerator";
// import {RegistrationFormRefsHookFormWithValidation} from "./components/RegistrationForm";

import { store } from './store';
import { FormWizard } from './components/FormWizard/FormWizard.tsx';
import { UsersList } from './components/UsersList/UsersList.tsx';
import { users } from './utils/mockData.ts';
import { BrandProvider } from './components/BrandContext/BrandContext.tsx';
import { Logo } from './ui/index.ts';

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
            {/*<ViewPort />*/}

            <ErrorBoundary fallback={<p className="dark:text-slate-300">General error</p>}>
                <ReduxAppProvider store={store}>
                    <BrandProvider>
                        <ThemeContextProvider>
                            <Logo />
                            <ThemeSwitcher />
                            <AuthContextProvider>
                                <RouterProvider router={router} />
                                <br />
                                <hr />
                                <br />
                                <ErrorBoundary>
                                    <AuthInfo />
                                </ErrorBoundary>
                                <br />
                                <hr />
                                <br />
                                <UsersList data={users} />
                            </AuthContextProvider>
                        </ThemeContextProvider>
                    </BrandProvider>
                </ReduxAppProvider>
            </ErrorBoundary>
        </>
    )
}

export default App
