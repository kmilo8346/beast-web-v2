import {FC} from 'react';
import classes from './container.module.css';

const MainCointainer:FC = props => {

    return (
        <div className={classes.body}>
            {props.children}
        </div>
    );

}
export default MainCointainer;