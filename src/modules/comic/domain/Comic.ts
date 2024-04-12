import { ComicDescription } from './ComicDescription';
import { ComicID } from './ComicID';
import { ComicThumbnail, Thumbnail } from './ComicThumbnail';
import { ComicTitle } from './ComicTitle';

export class Comic {
    private constructor(
        private readonly id: ComicID,
        private readonly title: ComicTitle,
        private readonly thumbnail: ComicThumbnail,
        private readonly description: ComicDescription
    ) {}

    public static create({
        id,
        title,
        thumbnail,
        description,
    }: {
        id: number;
        title: string;
        thumbnail: Thumbnail;
        description?: string;
    }): Comic {
        return new Comic(
            new ComicID(id),
            new ComicTitle(title),
            new ComicThumbnail(thumbnail),
            new ComicDescription(description || '')
        );
    }

    titleValue(): string {
        return this.title.value;
    }

    idValue(): number {
        return this.id.value;
    }

    thumbnailValue(): Thumbnail {
        return {
            path: this.thumbnail.value.path,
            extension: this.thumbnail.value.extension,
        };
    }

    descriptionValue(): ComicDescription {
        return this.description || '';
    }
}
