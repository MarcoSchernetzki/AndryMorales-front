import { ProductI } from '../model/product';

export interface RepoProduct {
    getProduct: (id: string) => Promise<ProductI>;
    findInspo: () => Promise<ProductI[]>;
    create: (
        product: Partial<ProductI>,
        token: string
    ) => Promise<{ products: ProductI }>;
    update: (
        id: string,
        partialProduct: Partial<ProductI>,
        token: string
    ) => Promise<ProductI>;
    delete: (id: string, token: string) => Promise<string>;
}
