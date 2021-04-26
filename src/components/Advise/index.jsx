import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Advise({text}) {
    return(
        <p className={styles.text}>{text}</p>
    )
}

Advise.defaultProps = {
    text: 'The value must be a positive number',
}

Advise.propTypes = {
    text: PropTypes.string.isRequired,
}