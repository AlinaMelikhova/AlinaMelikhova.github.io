import { FC } from 'react';
import Image from 'next/image';
import Me from '../../../img/Me.png';
import styles from './about.module.css';

export const About: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.title}>
          Hey &#128075; <br /> I`m Alina
        </h1>
        <p className={styles.description}>
          I`ve picked some random facts about myself and visualized them.
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={Me}
          width={385}
          height={380}
          alt={'Alina Melikhova'}
          className={styles.itemImg}
        />
      </div>
    </section>
  );
};
