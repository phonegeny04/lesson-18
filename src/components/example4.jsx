import { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>Зміна теми</h2>
      <button className={styles.button} onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Світла тема' : 'Темна тема'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;