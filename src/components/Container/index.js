import React from 'react';

import s from './Container.module';

import Array from '../Array';

const Container = () => {
  return (
    <div className={s.container}>
      <div className={s.navWrap}></div>
      <Array />
    </div>
  );
};

export default Container;
