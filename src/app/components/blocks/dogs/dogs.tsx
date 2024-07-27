import { FC } from 'react';
import styles from './dogs.module.css';
import { DoughnutChart } from './doughnut-chart';

export const Dogs: FC = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Dogs</h2>
      <div className={styles.DoughnutChartDescription}>
        <DoughnutChart />
        <p className={styles.description}>
          My whole life, I`ve always been a Golden Retriever fan. But lately,
          I`ve realized there are other dogs I really like too. So, check my
          Top-6!
        </p>
      </div>
      <p className={styles.popUp}>
        * Just kidding! I love all dogs <br /> ** And birds{' '}
      </p>
    </section>
  );
};
