export interface IAPIResponse<T> {
    code: number;
    status: boolean;
    data: IAPIData<T>;
}

export interface IAPIData<T> {
    limit: number;
    total: number;
    count: number;
    results: T[];
}
