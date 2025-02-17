import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage copy";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";

export const routes = {
    HOME: {
        path: '/',
        //title: 
    },
    COUNTER: {
        path: '/counter',
        //title: 
    },
    GENERATOR: {
        path: '/generator',
        //title: 
    },
    REGISTRATION: {
        path: '/registration',
        //title: 
    },
    STEPPER: {
        path: '/stepper',
        //title: 
    }
}

export const router = createBrowserRouter([{
    path: routes.HOME.path,
    element: <Layout />,
    children: [{
        path: routes.HOME.path,
        element: <HomePage />
    },
    {
        path: routes.COUNTER.path,
        element: <CounterPage />
    },
    {
        path: routes.GENERATOR.path,
        element: <GeneratorPage />
    },
    {
        path: routes.REGISTRATION.path,
        element: <RegistrationPage />
    },
    {
        path: routes.STEPPER.path,
        element: <StepperPage />
    }]
}]);