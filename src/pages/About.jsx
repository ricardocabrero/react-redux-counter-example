import React from 'react';
import styles from './styles.module.css';
import Counter from '../components/Counter';
import Explain from '../components/Explain';

export default function About() {

    return(
        <div className={styles.page}>
            <h2>About Page</h2>
            <Explain/>
            <Counter/>
        </div>
    )
}