import { Comic } from './Comic';

export interface ComicRepository {
    get(limit: number): Promise<Comic[] | undefined>;

    getById(id: string): Promise<Comic | undefined>;
}
