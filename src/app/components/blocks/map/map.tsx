'use client';

import { FC, useEffect, useRef } from 'react';
import styles from './map.module.css';
import { LEGEND } from './config';

export const Map: FC = () => {
  const mapElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    load(controller.signal)
      .then((initMap) => {
        if (!mapElRef.current) return;
        initMap(mapElRef.current);
      })
      .catch((err) => {
        if (err === 'aborted') {
          return;
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <section className={styles.root}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Travelling</h2>
        <p className={styles.description}>
          I've visited 58 countries and tried to stay as long as possible. I've
          mapped them out, showing how many weeks I spent in each one.
        </p>
      </div>
      <div className={styles.LineChartDescription}>
        <div ref={mapElRef} className={styles.mapWrapper} />

        <div className={styles.tooltip} id='map-tooltip'>
          <div className={styles.tooltipTitle} id='map-tooltip-country'></div>
          <div
            className={styles.tooltipDescription}
            id='map-tooltip-length'
          ></div>
        </div>

        <ul className={styles.legendList}>
          {LEGEND.filter((item) => !item.hidden).map((item) => (
            <li key={item.min} className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: item.style.fillColor }}
              ></div>
              <span className={styles.legendDescription}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function load(signal: AbortSignal) {
  return new Promise<(el: HTMLElement) => () => void>((resolve, reject) => {
    const abort = () => reject('aborted');
    signal.addEventListener('abort', abort, { once: true });

    import('./leaflet').then(({ initMap }) => {
      if (!signal.aborted) {
        resolve(initMap);
      }
    });
  });
}
