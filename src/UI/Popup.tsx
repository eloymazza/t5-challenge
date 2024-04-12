import React from 'react';
import styles from './Popup.module.css';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

const Popup = ({ children, onClick }: Props) => {
    return (
        <div className={`${styles.backdrop} `} onClick={onClick}>
            {children}
        </div>
    );
};

export default Popup;
