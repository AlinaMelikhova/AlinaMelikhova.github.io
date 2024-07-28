'use client';

import React, { FC } from 'react';
import cn from 'classnames';
import styles from './bar-chart.module.css';
import { BIRDS, Bird } from './config';

export const HorizontalBarChart: FC = () => {
  const [bird, setBird] = React.useState<Bird | undefined>(undefined);
  const [barchart, setBarchart] = React.useState<string | undefined>(undefined);

  const rowHoverHandler = (el: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const currentEl = el.currentTarget.id;
    const currenBird = BIRDS.find((item) => item.name === currentEl);
    setBird(currenBird);
  };

  const rowLeaveHandler = (el: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setBird(undefined);
  };

  const barHoverHandler = (
    el: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const currentEl = el.currentTarget.id;
    setBarchart(currentEl);
  };

  const barLeaveHandler = (
    el: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setBarchart(undefined);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {BIRDS.map(
          ({
            name,
            negativeValue,
            positiveValue,
            positive,
            negative,
            positiveId,
            negativeId,
          }) => {
            return (
              <li
                key={name}
                id={name}
                className={cn(
                  styles.listItem,
                  {
                    [styles.inactiveBarchart]: bird && bird.name !== name,
                  },
                  {
                    [styles.isActiveBarchart]: bird && bird.name === name,
                  }
                )}
                onMouseEnter={rowHoverHandler}
                onMouseLeave={rowLeaveHandler}
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
                      id={negativeId}
                      style={{ width: negativeValue }}
                      className={cn(styles.negativeBar, styles.dataBar, {
                        [styles.isActiveDatabar]:
                          barchart && barchart === negativeId,
                      })}
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
                      id={positiveId}
                      style={{ width: positiveValue }}
                      className={cn(styles.positiveBar, styles.dataBar, {
                        [styles.isActiveDatabar]:
                          barchart && barchart === positiveId,
                      })}
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
