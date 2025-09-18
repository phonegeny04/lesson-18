import { useState, useEffect } from 'react';
import styles from './TimerCounter.module.css';

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Лічильник: {count}</h2>
      <button className={styles.button} onClick={() => setCount(0)}>Скинути</button>
    </div>
  );
}

export default TimerCounter;
