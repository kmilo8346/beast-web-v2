import Image from 'next/image';
import classes from './productSection.module.css';

const ProductSection = (props) => {
    return (
        <section className={classes.productSection}>
            <div className={classes.productTitleWrapper}>
                <h2 className={classes.productTitleWrapperHeader}>PRODUCTOS DE ESTA TIENDA</h2>
            </div>
            <div className={classes.productsGrid}>
                {
                    props.storeProducts &&
                    props.storeProducts.map(p => <ProductItem imageUrl={p.imageUrl} nombre={p.nombre} precio={p.precio} key={p.id}/>)
                }
            </div>
        </section>
    );
}


const ProductItem = props => {

    return (
        <div className={classes.produtContainer}> 
            {
                /*<img className={classes.productImg}
                    src={props.imageUrl} 
                    alt={`Imagen`}
                />*/
                <Image className={classes.productImg}
                    src={props.imageUrl} 
                    alt={`Imagen de ${props.nombre}`}
                    height={130}
                    width={130}
                />
            }
            <p className={[classes.productName, classes.productsTextData].join(' ')}><i>{props.nombre}</i></p>
            <p className={[classes.productPrice, classes.productsTextData].join(' ')}>{`$${props.precio}`}</p>
        </div>
    )
}



export default ProductSection;