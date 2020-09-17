import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({url, text}) => (
  <a className={styles.Button} href={url}>{text}</a>
)

export default Button;