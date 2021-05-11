/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import Image from 'next/image';

import FirebaseContext from 'config/context';

import { greetingText } from 'functions';
import styles from './index.module.css';

const HeroText = () => {
  const { landingPage } = useContext(FirebaseContext);
  const { paraOne, paraTwo } = landingPage;

  return (
    <div className={styles.text}>
      <h1 className={styles.helloText}>{greetingText()}</h1>
      <p>{paraOne}</p>
      <p>{paraTwo}</p>
      <div className={styles.button}>
        <span>More about me</span>
        <Image className="down-arrow" src="/banner/down-arrow.svg" height={16} width={11} />
      </div>
    </div>
  );
};

export default HeroText;
