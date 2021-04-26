import React, { Fragment } from 'react';
import styles from './styles.module.css';

export default function Explain() {
    return(
        <Fragment>
            <p className={styles.text}>Sharing information between components with <em>Redux</em>.</p>
            <a className={styles.link} href="https://es.redux.js.org/" rel="noreferrer" target="_blank">https://es.redux.js.org/</a>
        </Fragment>
    )
}
