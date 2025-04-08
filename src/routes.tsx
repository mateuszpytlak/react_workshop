import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";
import { ProductsPage } from "./pages/ProductsPage";
import { BasketListPage } from "./pages/BasketListPage";
import { BrandSwitcherPage } from "./pages/BrandSwitcher";
import { ProductsDetailsPage } from "./pages/ProductsDetailsPage";
import { CreateProductPage } from "./pages/CreateProductPage";

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
    PRODUCTS_DETAILS: {
        path: '/products/:id',
        //title: 
    },
    CREATE_PRODUCT: {
        path: '/products/create',
        //title: 
    },
    BRAND_SWITCHER: {
        path: '/brand',
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
        path: routes.PRODUCTS_DETAILS.path,
        element: <ProductsDetailsPage />
    },
    {
        path: routes.CREATE_PRODUCT.path,
        element: <CreateProductPage />
    },
    {
        path: routes.BRAND_SWITCHER.path,
        element: <BrandSwitcherPage />
    },
    {
        path: routes.BASKETLIST.path,
        element: <BasketListPage />
    }]
}]);