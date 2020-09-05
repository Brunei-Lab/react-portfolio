import React from 'react';
import styles from '../styles/Skills.module.scss';

const Skill = ({ skill }) => (
  <div className={styles.Skill}>{ skill }</div>
)

export default Skill;