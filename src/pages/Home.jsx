import React from 'react';
import styles from './styles.module.css';
import Counter from '../components/Counter';
import Explain from '../components/Explain';

export default function Home() {

    return(
        <div className={styles.page}>
            <h2>Home Page</h2>
            <Explain/>
            <Counter/>
        </div>
    )
}