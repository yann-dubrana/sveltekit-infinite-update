import type {PageServerLoad} from './$types';
import type {Post} from "$lib/types";

export const load: PageServerLoad = async (): Promise<{ ids: Promise<number[]> }> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    const ids = Promise.resolve(data.map((post) => post.id));
    return {ids};
};