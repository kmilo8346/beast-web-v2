import {FC} from 'react';
import classes from './spinner.module.css';

const Spinner:FC = props => {

    return (<div className={classes.loader}>Loading...</div>);

}
export default Spinner;