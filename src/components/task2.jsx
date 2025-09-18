import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
    document.body.style.color = theme === 'dark' ? 'white' : 'black';
    return () => {
      document.body.style.backgroundColor = 'white'; // Повернення дефолтного стилю
      document.body.style.color = 'black';
    };
  }, [theme]);

  return (
    <div>
      <h2>Тема: {theme}</h2>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Перемкнути тему
      </button>
    </div>
  );
}

export default ThemeToggle;