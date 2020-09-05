import React from 'react';
import TechBadge from './TechBadge';
import Button from './Button';
import facebookImg from '../assets/images/facebook.png';
import membersOnlyImg from '../assets/images/members-only.png';
import privateEventsImg from '../assets/images/private-events.png';
import calculatorImg from '../assets/images/calculator.png';
import nextWebImg from '../assets/images/TNW.png';
import styles from '../styles/Projects.module.scss';

const Project = ({project}) => {
  const imgRef = {
    'facebookImg': facebookImg,
    'membersOnlyImg': membersOnlyImg,
    'privateEventsImg': privateEventsImg,
    'calculatorImg': calculatorImg,
    'nextWebImg': nextWebImg,
  }

  return (
    <div className={styles.card}>
      <div className={styles["card-description"]}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles["tech-container"]}>
          {project['tools'].map(tech => (
            <TechBadge text={tech} />
          ))}
        </div>
        <div className={styles["btn-container"]}>
          {project['links'].map(link => (
            <Button type={link.type} url={link.url} />
          ))}
        </div>
      </div>
      <div className={`${styles["card-image"]} ${styles[project["image-ref"]]}`}>
        <img src={imgRef[project["image-ref"]]} alt={`${project.title} project screenshot`}/>
      </div>
    </div>
  )
}

export default Project;