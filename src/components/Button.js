import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from '../styles/Button.module.scss';

const Button = ({url, type}) => (
  <a className={styles.Button} href={url}>{type}<BiRightArrowAlt /></a>
)

export default Button;