import React from 'react';
import styles from './Header.module.css';
import marvel from '../assets/marvel.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={marvel} alt="marvel-logo"></img>
        </header>
    );
};

export default Header;
