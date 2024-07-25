'use client';

import { FC } from 'react';
import cn from 'classnames';
import styles from './doughnut-chart.module.css';
import { DOGS } from './config';
import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const DoughnutChart: FC = () => {
  const [currentImg, setCurrentImg] = React.useState<
    StaticImageData | StaticImport | undefined | string
  >(undefined);
  const [currentName, setCurrentName] = React.useState<undefined | string>(
    undefined
  );
  const [currentBgColor, setCurrentBgColor] = React.useState<
    undefined | string
  >(undefined);

  const hoverHandler = (el: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const currentEl = el.currentTarget;
    const currentElId = el.currentTarget.id;
    currentEl.classList.add('isActiveDoughnut');
    Array.from(document.querySelectorAll('path')).forEach((e) => {
      if (e.id !== el.currentTarget.id) e.classList.add('inactiveDoughnut');
    });
    const currentDog = DOGS.find((item) => item.name === currentElId);
    setCurrentImg(currentDog?.img);
    setCurrentName(currentElId);
    setCurrentBgColor(currentDog?.bgColor);
  };

  const leaveHandler = (el: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const currentId = el.currentTarget;
    currentId.classList.remove('isActiveDoughnut');
    Array.from(document.querySelectorAll('path')).forEach((e) => {
      if (e.id !== el.currentTarget.id) e.classList.remove('inactiveDoughnut');
    });
    setCurrentImg(undefined);
    setCurrentName(undefined);
    setCurrentBgColor('transparent');
  };

  return (
    <div className={cn(styles.root)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        height='400px'
        width='400px'
        version='1.1'
        id='Layer_1'
        viewBox='0 0 310.679 310.679'
        xmlSpace='preserve'
        className={cn(styles.root)}
      >
        <g>
          <path
            id='Afghan Hound'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#aaf0f9' }}
            d='M193.208,220.93l39.811,68.956c46.424-26.861,77.66-77.054,77.66-134.546h-79.612   C231.066,183.367,215.84,207.836,193.208,220.93z'
          />
          <path
            id='Australian Shepherd'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#FBED69' }}
            d='M155.339,79.614c13.797,0,26.728,3.691,37.869,10.136l39.811-68.956   C210.168,7.573,183.638,0.001,155.338,0.001c-28.299,0-54.828,7.571-77.679,20.792l39.812,68.956   C128.611,83.305,141.544,79.614,155.339,79.614z'
          />
          <path
            id='German Shepherd'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#ff48ac' }}
            d='M233.019,20.794L193.208,89.75c22.631,13.095,37.858,37.563,37.858,65.591h79.612   C310.679,97.848,279.442,47.655,233.019,20.794z'
          />
          <path
            id='Golden Retriever'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#ff992d' }}
            d='M117.471,89.75L77.659,20.794C31.235,47.655,0,97.848,0,155.34h79.612   C79.612,127.313,94.84,102.844,117.471,89.75z'
          />
          <path
            id='Pomeranian'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#B397F7' }}
            d='M79.612,155.34H0c0,57.492,31.235,107.685,77.658,134.545l39.812-68.956   C94.839,207.835,79.612,183.367,79.612,155.34z'
          />
          <path
            id='Shiba Inu'
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            style={{ fill: '#82EEB8' }}
            d='M155.339,231.066c-13.796,0-26.729-3.691-37.869-10.137l-39.812,68.956   c22.852,13.222,49.381,20.793,77.68,20.793c28.3,0,54.831-7.571,77.68-20.793l-39.811-68.956   C182.068,227.376,169.136,231.066,155.339,231.066z'
          />
        </g>
      </svg>
      <span className={cn(styles.doughnutName)}>{currentName}</span>
      <div
        id='doughnutImage'
        style={{ backgroundColor: `${currentBgColor}` }}
        className={cn(styles.doughnutImage)}
      >
        {currentName && currentImg && (
          <Image width={200} height={200} alt={currentName} src={currentImg} />
        )}
      </div>
    </div>
  );
};
