import { Comic } from './Comic';

export interface ComicRepository {
    get(limit: number): Promise<Comic[] | undefined>;
}
