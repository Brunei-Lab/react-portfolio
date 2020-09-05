import React from 'react';
import Skill from '../components/Skill';
import styles from '../styles/Skills.module.scss';

const SkillsContainer = () => {
  const skills = ["HTML5", "CSS3", "Bootstrap", "Bulma", 
                  "JavaScript", "React", "Redux",
                  "Ruby", "Ruby on Rails",  
                  "RSpec", "Capybara", "Jest",
                  "SQL", "Git", "GitHub", "Heroku"]
  
  return (
    <div className={styles.SkillsContainer}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles["skills-wrapper"]} >
        {skills.map(currentSkill => <Skill skill={currentSkill} />)}
      </div>
    </div>
  )
}

export default SkillsContainer;