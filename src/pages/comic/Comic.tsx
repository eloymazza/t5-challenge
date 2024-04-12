import styles from './Comic.module.css';
import Character from './Character';
import LiimitSelector from './LiimitSelector';
import Loading from '../../UI/Loading';
import useComics from '../../hooks/useComics';

const LOADING_IMAGE_URL = 'https://www.fightersgeneration.com/characters4/wolvie-dashing.gif';

export function ComicList() {
    const { comics, loading, onChange } = useComics();
    return (
        <>
            <LiimitSelector onChange={onChange} />
            {loading ? (
                <Loading imageURL={LOADING_IMAGE_URL} />
            ) : (
                <ul className={styles.comicList}>
                    {comics &&
                        comics.map((comic, k) => {
                            return (
                                <li key={k}>
                                    <Character character={comic} />
                                </li>
                            );
                        })}
                </ul>
            )}
        </>
    );
}
