import React from 'react';
import styles from './quotes.module.css';

const Quotes = () => (
  <div className={styles.quotesBox}>
    <p className={styles.quotes}>
      Mathematics is not about numbers, equations, computations or algorithms:
      it is about understanding - William Paul Thurston
    </p>
  </div>
);

export default Quotes;
