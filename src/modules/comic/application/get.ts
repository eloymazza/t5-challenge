import { Comic } from '../domain/Comic';
import { ComicRepository } from '../domain/ComicRepository';

export class CommicGetter {
    private readonly repository: ComicRepository;

    constructor(repository: ComicRepository) {
        this.repository = repository;
    }

    async get(limit: number): Promise<Comic[] | undefined> {
        return this.repository.get(limit);
    }
}
