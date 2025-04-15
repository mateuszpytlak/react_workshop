import { CreateProductDto, ProductDto } from "../types/Product";

export type AirtableListResponse<T> = {
  records: T;
};

const API_BASE_URL = "https://api.airtable.com/v0/appKe3OZRo2NXZKMu";
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json',
};

//or try Axios

export const fetchProducts = (): Promise<
  AirtableListResponse<ProductDto[]>
> => {
  return fetch(`${API_BASE_URL}/products`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const fetchProduct = (id: ProductDto["id"] | undefined): Promise<ProductDto> => {
    if (!id) {
        throw new Error("Invalid id");
    }
  return fetch(`${API_BASE_URL}/products/${id}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const CreateProduct = (data: CreateProductDto): Promise<void> => {
  
return fetch(`${API_BASE_URL}/products`, {
  headers,
  method: 'POST',
  body: JSON.stringify( {records: [{fields: data}]} ),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error("Invalid response");
});
};