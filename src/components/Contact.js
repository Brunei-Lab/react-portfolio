import React from 'react';
import styles from '../styles/Contact.module.scss';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const Contact = () => {
  const title = "Let's talk? Send me a message!";
  const contactLinks = [
                        { link: "https://www.linkedin.com/in/brunagenz/", icon: FaLinkedin},
                        { link: "https://github.com/bruna-genz", icon: FaGithubSquare},
                        { link: "https://twitter.com/Bruna_GK", icon: FaTwitterSquare},                        
                        { link: "mailto:brunagenz92@gmailcom?subject='portfolio contact'", icon: ImMail},
                      ]

  return (
    <div className={styles.Contact}>
      <h1 className={styles.title}>{ title }</h1>
      { contactLinks.map(contact => (
        <a className={styles.contact} href={contact.link}>
          < contact.icon />
        </a>
      ))}
    </div>
  )
}

export default Contact;