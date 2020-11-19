import RestClient from './rest-client';
import { Product } from '../../../types';

class ProductClient extends RestClient<Product, void> {
    
    async getAllProducts() {
        let from = 0;
        let size = 100;
        const resp = await this.search({from: from, size: size, sort: {updated_at:'desc'}, source: ['images', 'store_info.id', 'price', 'name']});
        let total = resp.total;
        let products = resp.hits  as Product[];

        while(products.length < total){
            from = from + size;
           const resp = await this.search({from: from, size: size, sort: {updated_at:'desc'}, source: ['images', 'store_info.id', 'price', 'name']});
           products = products.concat(resp.hits as Product[]);
        }
        return products;

    }

}

export default ProductClient;