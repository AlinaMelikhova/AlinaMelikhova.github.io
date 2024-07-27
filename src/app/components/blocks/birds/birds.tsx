import cn from 'classnames';
import { FC } from 'react';
import styles from './birds.module.css';
import { HorizontalBarChart } from './bar-chart';

export const Birds: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.title}>Birds</h2>
        <p className={styles.description}>
          I’m a big fan of bird-watching, and Australia makes it super easy.
          I’ve listed and ranked my bird interactions below!
        </p>
      </div>
      <HorizontalBarChart />
    </section>
  );
};
