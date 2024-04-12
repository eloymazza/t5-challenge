import styles from './Comic.module.css';
import Character from './Character';
import LiimitSelector from './LiimitSelector';
import Loading from '../../UI/Loading';
import useComics from '../../hooks/useComics';
import { createPortal } from 'react-dom';
import Popup from '../../UI/Popup';
import CharacterDescription from './CharacterDescription';

const LOADING_IMAGE_URL = 'https://www.fightersgeneration.com/characters4/wolvie-dashing.gif';

export function ComicList() {
    const { comics, loading, onChange, getCharacterByID, characterSelected, setCharacterSelected } =
        useComics();

    console.log(characterSelected);
    return (
        <>
            {characterSelected &&
                createPortal(
                    <Popup onClick={() => setCharacterSelected(undefined)}>
                        <CharacterDescription character={characterSelected} />
                    </Popup>,
                    document.body
                )}
            <LiimitSelector onChange={onChange} />
            {loading ? (
                <Loading imageURL={LOADING_IMAGE_URL} />
            ) : (
                <ul className={styles.comicList}>
                    {comics &&
                        comics.map((comic, k) => {
                            return (
                                <li
                                    key={k + comic.idValue()}
                                    onClick={() => getCharacterByID(comic.idValue().toString())}
                                >
                                    <Character character={comic} />
                                </li>
                            );
                        })}
                </ul>
            )}
        </>
    );
}
