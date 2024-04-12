import { Thumbnail } from '../domain/ComicThumbnail';

export interface ApiResponse {
    id: number;
    name: string;
    thumbnail: Thumbnail;
}
