import { IProduct } from './i-product';

export interface ProductResponse {
    ok: boolean;
    product: IProduct,
    error?: string;
}
