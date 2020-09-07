import React from 'react';
import styles from '../styles/Contact.module.scss';

const Contact = ({ contactLinks }) => (
  <div className={styles.Contact}>
    <h1 className={styles.title}>Let's talk? <span>Send me a message!</span></h1>
    <div className={styles["links-container"]}>
      { contactLinks.map(contact => (
        <a className={styles["contact-link"]} href={contact.link} target="_blank" rel="noopener noreferrer">
          < contact.icon />
        </a>
      ))}
    </div>
  </div>
)

export default Contact;