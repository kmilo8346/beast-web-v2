import React from 'react';
import classes from './404.module.css';


const NotFoundPage:React.FC = () => {



    return <div className={classes.idnotfound}>
            <div className={classes.notfound}>
                <div className={classes.notfound404}>
                    <h1>404</h1>
                </div>
                <h2>Oops! Esta Página No Se Pudo Encontrar</h2>
                <p>Lo sentimos, pero la página que a la que trata de acceder no existe, fue eliminada, renombrada o desabilitada temporalmente</p>
                <a href='/'>Go To Homepage</a>
            </div>
        </div>;
}

export default NotFoundPage;