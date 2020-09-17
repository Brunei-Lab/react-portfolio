import React from 'react';
import Skill from '../components/Skill';
import styles from '../styles/Skills.module.scss';
import { RiCodeSSlashLine, RiBracesLine } from 'react-icons/ri';
import { BsBootstrap } from 'react-icons/bs';
import { SiBulma, SiJavascript, SiReact, SiRedux, SiRails, SiRubygems, SiJest, SiHeroku } from 'react-icons/si';
import { DiRuby, DiGitMerge } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const SkillsContainer = () => {
  const skills = [{ technology: "HTML5", "icon": RiCodeSSlashLine }, 
                  { technology: "CSS3", "icon": RiBracesLine },
                  { technology: "Bootstrap", "icon": BsBootstrap },
                  { technology: "Bulma", "icon": SiBulma },
                  { technology: "JavaScript", "icon": SiJavascript },
                  { technology: "React", "icon": SiReact },
                  { technology: "Redux", "icon": SiRedux},
                  { technology: "Ruby", "icon": DiRuby},
                  { technology: "Ruby on Rails", "icon": SiRails},
                  { technology: "RSpec", "icon": SiRubygems},
                  { technology: "Capybara", "icon": SiRubygems},
                  { technology: "Jest", "icon": SiJest},
                  { technology: "SQL", "icon": FaDatabase},
                  { technology: "Git", "icon": DiGitMerge},
                  { technology: "GitHub", "icon": AiFillGithub},
                  { technology: "Heroku", "icon": SiHeroku},
                ]
  const middle = skills.length / 2
  
  return (
    <div className={styles.SkillsContainer}>
      <h1 className={styles.title}>Techical Skills</h1>
      <div className={styles["skills-wrapper"]} >
        <div className={styles.column}>
          {skills.slice(0, middle).map(currentSkill => <Skill key={currentSkill.technology} skill={currentSkill} />)}
        </div>
        <div className={styles.column}>
          {skills.slice(middle).map(currentSkill => <Skill key={currentSkill.technology} skill={currentSkill} />)}
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer;