import React from 'react';
import { useDispatch } from 'react-redux';
import { stablishAction } from '../reducers/counterReducer';
import styles from './styles.module.css';
import Title from '../components/Title';
import Form from '../components/Form';

export default function Main({children}) {

    const dispatch = useDispatch();

    const setValue = (param) => {
        dispatch(stablishAction(param))
    }

    return (
        <div className={styles.main}>
            <Title/>
            {children}
            <Form takeValue={setValue}/>
        </div>
    )
}