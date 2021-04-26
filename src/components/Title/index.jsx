import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Title({text}) {
    return(
        <h1 className={styles.title}>{text}</h1>
    )
}

Title.defaultProps = {
    text: 'React Redux Example',
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}