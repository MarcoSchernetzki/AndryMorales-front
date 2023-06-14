import { RepoProduct } from './repository';
import { ProductI } from '../model/product';

export class ProductRepository implements RepoProduct {
    url: string;
    constructor(_url = '') {

        this.url = 'http://localhost:7700/products';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    async getProduct(id: string): Promise<ProductI> {
        return fetch(`${this.url}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async getAllProducts(): Promise<{ products: ProductI[] }> {
        return fetch(`${this.url}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async findInspo(): Promise<ProductI[]> {
        return fetch(`${this.url}/find/:inspiration/:true`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async create(
        product: Partial<ProductI>,
        token: string
    ): Promise<{ products: ProductI }> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async update(
        id: string,
        partialProduct: Partial<ProductI>,
        token: string
    ): Promise<ProductI> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialProduct),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.product)
            .catch((error) => {
                return `${error}`;
            });
    }

    async delete(id: string, token: string): Promise<string> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.id)
            .catch((error) => {
                return `${error}`;
            });
    }
}
