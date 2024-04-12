import { Comic } from '../domain/Comic';
import { IAPIResponse } from '../../shared/infrastructure/IApiResponse';
import { ComicRepository } from '../domain/ComicRepository';
import { ApiResponse } from './ApiResponse';
import { BaseApiRepository } from '../../shared/infrastructure/BaseApiRepository';

const url = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY || '';

export class ApiComicRepository extends BaseApiRepository implements ComicRepository {
    async get(limit: number): Promise<Comic[]> {
        const options = {
            method: 'GET',
        };
        const response = await this.execute<IAPIResponse<ApiResponse>>(
            `${url}/characters?apikey=${apiKey}&limit=${limit}`,
            options
        );
        return response?.data.results.map((data) => {
            return Comic.create({ id: data.id, title: data.name, thumbnail: data.thumbnail });
        });
    }
    async getById(id: string): Promise<Comic> {
        const options = {
            method: 'GET',
        };
        const response = await this.execute<IAPIResponse<ApiResponse>>(
            `${url}/characters/${id}?apikey=${apiKey}`,
            options
        );

        console.log('response', response);
        const character = response.data.results[0];

        return Comic.create({
            id: character.id,
            title: character.name,
            description: character.description,
            thumbnail: character.thumbnail,
        });
    }
}
