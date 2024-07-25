import cn from 'classnames';
import { FC } from 'react';
import styles from './steps.module.css';
import { LineChart } from './line-chart';

export const Steps: FC = () => {
  return (
    <section className={cn(styles.root)}>
      <div className={cn(styles.titleWrapper)}>
        <h2 className={cn(styles.title)}>Steps</h2>
        <p className={cn(styles.description)}>
          Steps, really? Okay, I know it's boring, but I really enjoy walking,
          so this is the only big data I have.
        </p>
      </div>
      <div className={cn(styles.LineChartDescription)}>
        <LineChart />
      </div>
    </section>
  );
};
