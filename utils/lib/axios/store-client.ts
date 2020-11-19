import RestClient from './rest-client';
import { Store, Slug } from '../../../types';

class StoreClient extends RestClient<Store, void> {

    async getAllSlugs (): Promise<Slug[]> {
        let from = 0;
        let size = 100;
        const resp = await this.search({source: ['slug'], from: from, size: size});
        let total = resp.total;
        let slugs = resp.hits  as Slug[];

        while(slugs.length < total){
            from = from + size;
           const resp = await this.search({source: ['slug'], from: from, size:size});
           slugs = slugs.concat(resp.hits as Slug[]);
        }
        return slugs;
    }

    async searchStoreBySlug(slug:string):Promise<Store | undefined> {
        const resp =  await this.search({filters:{
            slug: slug
        }});
        if(resp.hits.length === 0){
            console.log(`WARNING: No hay tiendas con el slug ${slug}`);
            return;
        }
        if(resp.hits.length > 1){
            console.log('WARNING: Existe mas de una tienda con ese slug');
        }
        return resp.hits[0];   
    }
}

export default new StoreClient('/stores');