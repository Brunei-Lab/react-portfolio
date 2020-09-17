import React from 'react';
import TechBadge from './TechBadge';
import { BiRightArrowAlt } from 'react-icons/bi';
import facebookImg from '../assets/images/projects/face22.png';
import capsuleWardrobeImg from '../assets/images/projects/capsule-wardrobe.png';
import moodImg from '../assets/images/projects/OhMyMood.png';
import spaceBurnaImg from '../assets/images/projects/space-burna.png';
import tttImg from '../assets/images/projects/ttt.png';
import weatherAppImg from '../assets/images/projects/weather-app.png';
import worthyWorkImg from '../assets/images/projects/worthy-work.png';
import styles from '../styles/Projects.module.scss';

const Project = ({project}) => {
  const imgRef = {
    'facebookImg': facebookImg,
    'capsuleWardrobeImg': capsuleWardrobeImg,
    'moodImg': moodImg,
    'spaceBurnaImg': spaceBurnaImg,
    'tttImg': tttImg,
    'weatherAppImg': weatherAppImg,
    'worthyWorkImg': worthyWorkImg
  }

  return (
    <div className={`${styles.card} ${styles[project["image-ref"]]}`}>
      <div className={styles["card-description"]}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles["tech-container"]}>
          {project['tools'].map(tech => (
            <TechBadge text={tech} key={tech}/>
          ))}
        </div>
        <div className={styles["links-container"]}>
          {project['links'].map(link => (
            <a className={styles["project-link"]} href={link.url}>View {link.type}<BiRightArrowAlt /></a>
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