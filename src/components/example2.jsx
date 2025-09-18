import { useState, useEffect } from 'react';
import styles from './TitleUpdater.module.css';

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Ви клацнули ${count} разів`;
  }, [count]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Ви клацнули {count} разів</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Клацни!</button>
    </div>
  );
}

export default TitleUpdater;