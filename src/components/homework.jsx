import { useState, useEffect } from 'react';
import './ColorFader.css';

function ColorFader() {
  const [isRunning, setIsRunning] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['red', 'blue'];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setColorIndex((prev) => (prev + 1) % colors.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div>
      <div
        className="color-box"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        Колір змінюється!
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Зупинити' : 'Запустити'}
      </button>
    </div>
  );
}

export default ColorFader;