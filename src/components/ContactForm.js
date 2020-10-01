import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import styles from '../styles/Contact.module.scss';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p>Thanks for your contact! I will reply as soon as possible.</p>
  }

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit}>
      <input 
        className={styles.name}
        id = "name"
        type = "name"
        name = "name"
        placeholder = "Name"
        required
      />
      <ValidationError 
        prefix = "Name"
        field = "name"
        errors = {state.errors}
      />
      <input 
        id = "email"
        type = "email"
        name = "email"
        placeholder = "Email"
        required
      />
      <ValidationError 
        prefix = "Email"
        field = "email"
        errors = {state.errors}
      />
      <textarea
        className={styles.message}
        id = "message"
        name = "message"
        placeholder = "Message"
        required
      />
      <ValidationError 
        prefix = "Message"
        field = "message"
        errors = {state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

export default ContactForm;