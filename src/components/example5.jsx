import { useRef, useEffect } from 'react';
import styles from './AutoFocusInput.module.css';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Це поле автоматично отримає фокус при завантаженні компонента.</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Я отримаю фокус!"
        className={styles.input}
      />
    </div>
  );
}

export default AutoFocusInput;