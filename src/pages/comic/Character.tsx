import React from 'react';
import { Comic } from '../../modules/comic/domain/Comic';
import styles from './Character.module.css';
type Props = {
    character: Comic;
};

const Character = ({ character }: Props) => {
    const [hoverEffect, setHoverEffect] = React.useState(false);

    const title = character.titleValue();
    const thumbnail = character.thumbnailValue();
    const thumbnailUrl = `${thumbnail.path}.${thumbnail.extension}`;

    const toggleAnimation = () => {
        setHoverEffect((prev) => !prev);
    };

    return (
        <div
            className={styles.characterContainer}
            onMouseEnter={toggleAnimation}
            onMouseLeave={toggleAnimation}
        >
            <div className={styles.imageContainer}>
                <img
                    src={thumbnailUrl}
                    className={`${styles.characterImage} ${hoverEffect ? styles.expandImage : ''}`}
                    width="100%"
                    height="100%"
                    alt={title}
                />
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.description}>{title.toUpperCase()}</div>
                <div className={`${styles.separator} ${hoverEffect ? styles.expand : ''}`}></div>
            </div>
        </div>
    );
};

export default Character;
