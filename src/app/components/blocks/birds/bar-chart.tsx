'use client';

import { FC } from 'react';
import cn from 'classnames';
import styles from './bar-chart.module.css';
import { BIRDS } from './config';

export const HorizontalBarChart: FC = () => {
  const rowHoverHandler = (el: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const currentEl = el.currentTarget;
    currentEl.classList.add(styles.isActiveBarchart);
    Array.from(document.querySelectorAll('[data-bird]')).forEach((e) => {
      if (e.id !== el.currentTarget.id)
        e.classList.add(styles.inactiveBarchart);
    });
  };

  const rowLeaveHandler = (el: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const currentEl = el.currentTarget;
    currentEl.classList.remove(styles.isActiveBarchart);
    Array.from(document.querySelectorAll('[data-bird]')).forEach((e) => {
      if (e.id !== el.currentTarget.id)
        e.classList.remove(styles.inactiveBarchart);
    });
  };

  const barHoverHandler = (
    el: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const currentEl = el.currentTarget;
    currentEl.classList.add(styles.isActiveDatabar);

    const container = currentEl.closest('[data-container]');
    const description = container?.querySelector(
      '[data-description]'
    ) as HTMLElement | null;

    if (description) {
      description.style.visibility = 'visible';
    }
  };

  const barLeaveHandler = (
    el: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const currentEl = el.currentTarget;
    currentEl.classList.remove(styles.isActiveDatabar);

    const container = currentEl.closest('[data-container]');
    const description = container?.querySelector(
      '[data-description]'
    ) as HTMLElement | null;

    if (description) {
      description.style.visibility = '';
    }
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {BIRDS.map(
          ({ name, negativeValue, positiveValue, positive, negative }) => {
            return (
              <li
                key={name}
                id={name}
                className={styles.listItem}
                onMouseEnter={rowHoverHandler}
                onMouseLeave={rowLeaveHandler}
                data-bird
              >
                <p className={styles.listItemDescription}>{name}</p>
                <div
                  className={cn(styles.rowContainer, {
                    [`${name}-styles.itemlist}`]: true,
                  })}
                >
                  <div className={styles.negativeContainer} data-container>
                    <span className={styles.negativeBarValue}>
                      {negativeValue}
                    </span>
                    <div
                      style={{ width: negativeValue }}
                      className={cn(styles.negativeBar, styles.dataBar)}
                      onMouseEnter={barHoverHandler}
                      onMouseLeave={barLeaveHandler}
                    ></div>
                    <div
                      className={cn(
                        styles.barDescription,
                        styles.barDescriptionNegative
                      )}
                      data-description
                    >
                      {negative}
                    </div>
                  </div>
                  <div className={styles.positiveContainer} data-container>
                    <div
                      style={{ width: positiveValue }}
                      className={cn(styles.positiveBar, styles.dataBar)}
                      onMouseEnter={barHoverHandler}
                      onMouseLeave={barLeaveHandler}
                    ></div>
                    <div className={styles.barDescription} data-description>
                      {positive}
                    </div>
                    <span className={styles.positiveBarValue}>
                      {positiveValue}
                    </span>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
