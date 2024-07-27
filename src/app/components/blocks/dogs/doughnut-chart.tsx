'use client';

import cn from 'classnames';
import styles from './doughnut-chart.module.css';
import { DOGS, Dog } from './config';
import React from 'react';
import Image from 'next/image';

export const DoughnutChart: React.FC = () => {
  const [dog, setDog] = React.useState<Dog | undefined>(undefined);

  const hoverHandler: React.MouseEventHandler = (el) => {
    const currentElId = el.currentTarget.id;
    const currentDog = DOGS.find((item) => item.name === currentElId);
    setDog(currentDog);
  };

  const leaveHandler = () => {
    setDog(undefined);
  };

  return (
    <div className={styles.root}>
      <svg
        height='400px'
        width='400px'
        viewBox='0 0 310.679 310.679'
        className={styles.root}
      >
        {DOGS.map((item) => (
          <path
            key={item.name}
            id={item.name}
            className={cn({
              [styles.inactiveDoughnut]: dog && dog.name !== item.name,
            })}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: item.bgColor }}
            d={item.path}
          />
        ))}
      </svg>
      <span className={styles.doughnutName}>{dog?.name}</span>
      <div
        id='doughnutImage'
        style={{ backgroundColor: `${dog?.bgColor || 'transparent'}` }}
        className={styles.doughnutImage}
      >
        {dog && <Image width={200} height={200} alt={dog.name} src={dog.img} />}
      </div>
    </div>
  );
};
