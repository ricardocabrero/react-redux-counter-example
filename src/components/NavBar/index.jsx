import React from 'react';
import { NavLink } from  'react-router-dom';
import styles from './styles.module.css';

export default function NavBar() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink to='/home' activeClassName={styles.active}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName={styles.active}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}