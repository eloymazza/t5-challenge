import React, { useEffect, useState } from 'react';
import { Comic } from '../modules/comic/domain/Comic';
import { ApiComicRepository } from '../modules/comic/infrastructure/ApiComicRepository';
import { CommicGetter } from '../modules/comic/application/get';

const repository = new ApiComicRepository();
const service = new CommicGetter(repository);

const useComics = () => {
    const [comics, setComics] = useState<Comic[]>();
    const [limit, setLimit] = useState(15);
    const [loading, setLoading] = useState(false);
    const [characterSelected, setCharacterSelected] = useState<Comic>();

    useEffect(() => {
        const loadComics = async () => {
            setLoading(true);
            try {
                const comics = await service.get(limit);
                setComics(comics);
            } catch (error) {
                console.log('error');
            } finally {
                setLoading(false);
            }
        };
        loadComics();
    }, [limit]);

    const onChange = (value: string) => {
        setLimit(+value);
    };

    const getCharacterByID = (id: string) => {
        const fetchCharacterById = async () => {
            try {
                const character = await service.getById(id);
                setCharacterSelected(character);
            } catch (error) {
                console.log('error');
            } finally {
                setLoading(false);
            }
        };
        fetchCharacterById();
    };

    return {
        comics,
        loading,
        onChange,
        limit,
        getCharacterByID,
        characterSelected,
        setCharacterSelected,
    };
};

export default useComics;
