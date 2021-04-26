import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Advise from '../Advise';

export default function Form({takeValue}) {

    const [value, setValue] = useState(0);
    const [message, setMessage] = useState(false);

    const handleChange = ({target}) => {
        setValue(prevState => target.value);
        if(target.value >= 0) {
            setMessage(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = Number(value);
        if(number < 0) {
            setMessage(true);
            return;
        }
        takeValue(number);
        setValue(0);
    }

    const advise = message ? <Advise/> : ``;
 
    return(
        <Fragment>
            <form 
            className={styles.form}
            onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                type="number" 
                value={value} 
                placeholder='insert value'/>
                <button type="submit">Stablish</button>
            </form>
            {advise}
        </Fragment>
    )
}

Form.propTypes = {
    takeValue: PropTypes.func.isRequired,
}