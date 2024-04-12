import React from 'react';
import styles from './Loading.module.css';

type Props = {
    message?: string;
    imageURL?: string;
};

const Loading = ({ message, imageURL }: Props) => {
    return (
        <div className={styles.loadingImageContainer}>
            {imageURL && <img src={imageURL} alt={message ? message : 'Cargando'} />}
            <p>{message ? message : 'Cargando...'} </p>
        </div>
    );
};

export default Loading;
