import React, { useState } from 'react';

const Columns = () => {
  const [touchInfo, setTouchInfo] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchInfo({
      ...touchInfo,
      startX: touch.clientX,
      startY: touch.clientY,
    });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setTouchInfo({
      ...touchInfo,
      endX: touch.clientX,
      endY: touch.clientY,
    });
  };

  const handleTouchEnd = () => {
    console.log('Touch ended:', touchInfo);
    // Aquí puedes manejar la lógica después de que el toque termine
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}
    >
      <p>Toca y arrastra en esta área</p>
    </div>
  );
};

export default Columns;