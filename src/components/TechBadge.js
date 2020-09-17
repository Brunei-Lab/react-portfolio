import React from 'react';
import styles from '../styles/TechBadge.module.scss';

const TechBadge = ({text}) => (
  <div className={styles.TechBadge}>{text}</div>
);

export default TechBadge;