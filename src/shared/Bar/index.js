import React from 'react';

import s from './Bar.module';

const Bar = ({ width, height }) => {
  const barStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={s.bar} style={barStyle}>
      <span>{height}</span>
    </div>
  );
};

export default Bar;
