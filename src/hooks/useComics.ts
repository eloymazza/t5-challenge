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

    return { comics, loading, onChange, limit };
};

export default useComics;
