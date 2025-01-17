<script lang="ts">

    import {postService} from "$lib/post.store.svelte";

    type Props = {
        id: number;
    }

    let {id}: Props = $props();

</script>

<!-- Causes an infinite loop where the component is continuously rendered -->
{#await postService.getPost(id)}
    <!-- initial showing of partial data -->
    <li>{id} - loading ...</li>
{:then postIndex}
    <!-- final showing of full data -->
    {#if postIndex > -1}
        <li>{postService.data[postIndex].id} - {postService.data[postIndex].title}</li>
    {/if}
{/await}
