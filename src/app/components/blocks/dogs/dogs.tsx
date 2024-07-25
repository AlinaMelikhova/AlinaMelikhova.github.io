import cn from 'classnames';
import { FC } from 'react';
import styles from './dogs.module.css';
import { DoughnutChart } from './doughnut-chart';

export const Dogs: FC = () => {
  return (
    <section className={cn(styles.root)}>
        <h2 className={cn(styles.title)}>Dogs</h2>
      <div className={cn(styles.DoughnutChartDescription)}>
        <DoughnutChart />
        <p className={cn(styles.description)}>
          My whole life, I`ve always been a Golden Retriever fan. But lately,
          I`ve realized there are other dogs I really like too. So, check my
          Top-6!
        </p>
      </div>
      <p className={cn(styles.popUp)}>*Just kidding! I love all dogs</p>
    </section>
  );
};
