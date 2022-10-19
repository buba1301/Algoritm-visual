import React from 'react';

import s from './Container.module';

import Array from '../Array';
import Button from '../../shared/Button';

const buttonsName = ['createArray', 'bubbleSort', 'selectionSort'];

const Container = () => (
  <div className={s.container}>
    <div className={s.navWrap}>
      {buttonsName.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
    <Array />
  </div>
);

export default Container;
