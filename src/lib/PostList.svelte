<script lang="ts">

    import {postService} from "$lib/post.store.svelte";
    import PostItem from "$lib/PostItem.svelte";

</script>


{#await postService.getPosts()}
    <p>waiting ...</p>
{:then postsIds}
    <ul>
        {#each postsIds as id}
            <PostItem {id}/>
        {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
