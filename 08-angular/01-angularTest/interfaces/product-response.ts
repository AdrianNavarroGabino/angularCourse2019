// Adrián Navarro Gabino

import { IProduct } from '../src/app/products/interfaces/i-product';

export interface ProductResponse {
    ok: boolean;
    product: IProduct,
    error?: string;
}
