import { FC } from 'react';
import styles from './steps.module.css';
import { LineChart } from './line-chart';

export const Steps: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Steps</h2>
        <p className={styles.description}>
          Steps, really? Okay, I know it's boring, but I really enjoy walking,
          so this is the only big enough data I have.
        </p>
      </div>
      <div className={styles.LineChartDescription}>
        <LineChart />
      </div>
    </section>
  );
};
