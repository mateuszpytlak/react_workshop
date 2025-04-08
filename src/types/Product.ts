export type Product = {
    id: number;
    name: string;
    price: number;
}

export type ProductDto = {
    id: string;
    fields: {
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
    }
}

import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    description: z.string().min(3, 'Description is reqiured'),
    price: z.number().min(1, 'Price must be greater than 0'),
});



export type CreateProductDto = z.infer<typeof createProductSchema>;