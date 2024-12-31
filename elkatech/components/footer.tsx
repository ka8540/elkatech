// Importing React and Next link component
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // Assuming CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
            <h2>Company Name</h2>
            <p>1234 Street Name, City Name, Country Name</p>
            <p>Phone: 123-456-7890</p>
            <p>Email:</p>
        </div>
      <div className={styles.footerBottom}>
        
        <p>Copyright &copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
