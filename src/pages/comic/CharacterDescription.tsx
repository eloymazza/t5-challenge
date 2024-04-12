import React from 'react';
import styles from './CharacterDescription.module.css';
import Character from './Character';
import { Comic } from '../../modules/comic/domain/Comic';
type Props = {
    character: Comic;
};

const CharacterDescription = ({ character }: Props) => {
    return (
        <div className={styles.characterDescriptionContainer}>
            <Character character={character} />
        </div>
    );
};

export default CharacterDescription;
