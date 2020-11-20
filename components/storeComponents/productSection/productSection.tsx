import {FC} from 'react';
import Image from 'next/image';
import classes from './productSection.module.css';
import { PurifiedProduct } from '../../../types';



interface SectionPropTypes {
    storeProducts: PurifiedProduct[]    
}

const ProductSection:FC<SectionPropTypes> = (props) => {
    return (
        <section className={classes.productSection}>
            
            {props.storeProducts.length > 0 ?
                <> 
                    <div className={classes.productTitleWrapper}>
                        <h2 className={classes.productTitleWrapperHeader}>PRODUCTOS DE ESTA TIENDA</h2>
                    </div>
                    <div className={classes.productsGrid}>
                        {
                            props.storeProducts &&
                                props.storeProducts.map(p => <ProductItem product={p} key={p.id}/>)
                        }
                    </div>
                </>
                : 
                <h2 className={classes.productTextNoPRoducts}>LA TIENDA NO TIENE PRODUCTOS DISPONIBLES EN ESTOS MOMENTOS</h2>
            }
            
        </section>
    );
}

type ProductItemPropType = {
    product: PurifiedProduct
}

const ProductItem:FC<ProductItemPropType> = props => {

    return (
        <div className={classes.produtContainer}> 
            {
                <Image 
                    className={classes.productImg}
                    src={props.product.imageUrl} 
                    alt={`Imagen de ${props.product.nombre}`}
                    height={130}
                    width={130}
                />
            }
            <h3 className={[classes.productName, classes.productsTextData].join(' ')}><i>{props.product.nombre}</i></h3>
            <p className={[classes.productPrice, classes.productsTextData].join(' ')}>{`${props.product.precio}`}</p>
        </div>
    )
}



export default ProductSection;