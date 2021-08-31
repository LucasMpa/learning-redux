import React from 'react';
import {increment, decrement, asyncIncrement, incrementAmount } from './../../app/Stock.store'
import {RootState} from './../../app/'
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {dispatch(decrement())}}
        >
          -
        </button>
        <span className={styles.value}>{stock.counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {dispatch(increment())}}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={5}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementAmount(5))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(asyncIncrement())}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
