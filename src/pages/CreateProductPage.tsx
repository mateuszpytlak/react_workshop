import { useNavigate } from "react-router-dom";
import { CreateProductForm } from "../features/Products/CreateProductForm"
import { CreateProduct } from "../services/products";
import { CreateProductDto } from "../types/Product"
import { routes } from "../routes";

export const CreateProductPage = () => {

    const navigate = useNavigate();

    const handleSubmit = async (data: CreateProductDto) => {
        await CreateProduct(data);
        navigate(routes.PRODUCTS.path);
    }

    return (
        <>
            <h1 className="dark:text-slate-300">Create product</h1>
            <CreateProductForm onSubmit={handleSubmit} />
        </>
    )
}