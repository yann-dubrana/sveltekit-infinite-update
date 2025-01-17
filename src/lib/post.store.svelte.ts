import type {Post} from "$lib/types";

class PostService {
    data: Post[] = $state([]);

    //this is use to download the full data of a post and return its index in the data array
    async getPost(id: number): Promise<number> {
        const index = this.data.findIndex((post) => post.id === id);
        if (index !== -1) {
            return index;
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post: Post = await response.json();
        this.data.push(post);
        return this.data.length - 1;
    }
}

export const postService = new PostService();
