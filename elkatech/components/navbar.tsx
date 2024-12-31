import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <Link href="/" >
                    <img src="/elkatech.png" alt="ET" />
                </Link>
            </div>
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
            </button>
            <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    Home 
                </Link>
                <Link href="/aboutus" onClick={() => setIsOpen(false)}>
                    About
                </Link>
                <Link href="/services" onClick={() => setIsOpen(false)}>
                    Products
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
