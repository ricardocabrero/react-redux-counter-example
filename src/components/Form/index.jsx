import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Form({takeValue}) {

    const [value, setValue] = useState(0);

    const handleChange = ({target}) => {
        setValue(prevState => target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = Number(value);
        takeValue(number);
        setValue(0);
    }

    return(
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
    )
}

Form.propTypes = {
    takeValue: PropTypes.func.isRequired,
}