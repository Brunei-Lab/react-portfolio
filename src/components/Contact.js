import React from 'react';
import styles from '../styles/Contact.module.scss';
import ContactForm from './ContactForm';

const Contact = ({ contactLinks }) => (
  <div className={styles.Contact}>
    <h1 className={styles.title}>Let's talk? <span>Send me a message!</span></h1>
    <div className={styles["contact-container"]}>
      <ContactForm />
      <div className={styles["links-container"]}>
        { contactLinks.map(contact => (
          <a className={styles["contact-link"]} href={contact.link} key={contact.ref} target="_blank" rel="noopener noreferrer">
            < contact.icon />
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Contact;