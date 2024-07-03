import React from 'react';
import styles from './button.module.css';

const ContactMeButton = () => {
  return (
    <a href="mailto:birukm555@gmail.com" className={styles.contactBtn}>
      Contact Me
    </a>
  );
};

export default ContactMeButton;
