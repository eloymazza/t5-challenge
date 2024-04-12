import { ComicID } from './ComicID';
import { ComicThumbnail, Thumbnail } from './ComicThumbnail';
import { ComicTitle } from './ComicTitle';

export class Comic {
    private constructor(
        private readonly id: ComicID,
        private readonly title: ComicTitle,
        private readonly thumbnail: ComicThumbnail
    ) {}

    public static create({
        id,
        title,
        thumbnail,
    }: {
        id: number;
        title: string;
        thumbnail: Thumbnail;
    }): Comic {
        return new Comic(new ComicID(id), new ComicTitle(title), new ComicThumbnail(thumbnail));
    }

    titleValue(): string {
        return this.title.value;
    }

    thumbnailValue(): Thumbnail {
        return {
            path: this.thumbnail.value.path,
            extension: this.thumbnail.value.extension,
        };
    }
}
