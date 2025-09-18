import { useState, useEffect } from 'react';

function WindowResize2() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>Ширина вікна: {width}px</h2>
    </div>
  );
}

export default WindowResize2;