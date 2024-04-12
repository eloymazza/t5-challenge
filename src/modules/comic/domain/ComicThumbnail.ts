export interface Thumbnail {
    path: string;
    extension: string;
}
export class ComicThumbnail {
    constructor(readonly value: Thumbnail) {}
}
