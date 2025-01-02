import { z } from 'zod';

export const validationSchema = z.object({
    email: z.string().email({ message: "Invalid e-mail"}),
    password: z.string().min(3, 'Password must have more than 3 characters'),
    language: z.string().min(1, 'Min one character is required').max(5, 'Max 5 characters')
});

export type RegistrationFormData = z.infer<typeof validationSchema>;