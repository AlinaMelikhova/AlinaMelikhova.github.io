import cn from 'classnames';
import { FC } from 'react';
import Image from 'next/image';
import Me from '../../../img/Me.png';
import styles from './about.module.css';

export const About: FC = () => {
  return (
    <section className={cn(styles.root)}>
      <div className={cn(styles.descriptionWrapper)}>
        <h1 className={cn(styles.title)}>
          Hey &#128075; <br /> I`m Alina
        </h1>
        <p className={cn(styles.description)}>
          I`ve picked some random facts about myself and visualized them
          {/* <br />
          Lowy Institute Team */}
        </p>
      </div>
      <div className={cn(styles.imgWrapper)}>
        <Image
          src={Me}
          width={385}
          height={380}
          alt={'Alina Melikhova'}
          className={cn(styles.itemImg)}
        />
      </div>
    </section>
  );
};
