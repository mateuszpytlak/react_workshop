import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";
import { ProductsPage } from "./pages/ProductsPage";
import { BasketListPage } from "./pages/BasketListPage";

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
    },
    PRODUCTS: {
        path: '/products',
        //title: 
    },
    BASKETLIST: {
        path: '/basket_list',
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
    },
    {
        path: routes.PRODUCTS.path,
        element: <ProductsPage />
    },
    {
        path: routes.BASKETLIST.path,
        element: <BasketListPage />
    }]
}]);