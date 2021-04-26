import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementAction, incrementAction, restartAction } from '../../reducers/counterReducer';
import styles from './styles.module.css';

export default function Counter() {

    const state = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementAction());
    }

    const decrement = () => {
        dispatch(decrementAction());
    }

    const restart = () => {
        dispatch(restartAction());
    }

    return(
        <div className={styles.counter}>
            <button 
            disabled={state === 0 ? 'disabled' : ''}
            onClick={decrement}>Decrement</button>
            <p>{state}</p>
            <button onClick={increment}>Increment</button>
            <button 
            disabled={state === 0 ? 'disabled' : ''}
            onClick={restart}>Restart</button>
        </div>
    )
}