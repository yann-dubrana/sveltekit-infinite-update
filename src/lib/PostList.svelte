<script lang="ts">

    import PostItem from "$lib/PostItem.svelte";

    type Props = {
        postIds: number[];
    }

    let {postIds}: Props = $props();

</script>


<ul>
    {#each postIds as id}
        <PostItem {id}/>
    {/each}
</ul>