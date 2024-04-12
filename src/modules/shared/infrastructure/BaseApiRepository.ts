export class BaseApiRepository {
    async execute<T>(url: string, options: any) {
        const apiResponse = await fetch(url, options);

        if (apiResponse.status === 200 || apiResponse.status === 201) {
            return (await apiResponse.json()) as T;
        } else {
            throw new Error('requested action failed');
        }
    }
}
