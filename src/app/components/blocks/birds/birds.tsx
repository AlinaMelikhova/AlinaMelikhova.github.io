import cn from 'classnames';
import { FC } from 'react';
import styles from './birds.module.css';
import { HorizontalBarChart } from './bar-chart';

const DATA_SET = {
  corella: {
    title: 'Corella',
    value: -5,
    text: '',
  },
};

export const Birds: FC = () => {
  const BIRDS_TYPE: string[] = [
    'Corella',
    'Cockatoo',
    'Loreekit',
    'Kookaburra',
    'Magpie',
    'Noisy miner',
    'Ibis',
  ];
  return (
    <section className={cn(styles.root)}>
      <div className={cn(styles.descriptionWrapper)}>
        <h2 className={cn(styles.title)}>Birds</h2>
        <p className={cn(styles.description)}>
          I’m a big fan of bird-watching, and Australia makes it super easy.
          I’ve listed and ranked my bird interactions below!
        </p>
      </div>
      <HorizontalBarChart />
    </section>
  );
};
