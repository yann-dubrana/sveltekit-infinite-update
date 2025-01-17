<script lang="ts">
    import {type PageServerData} from "./$types"
    import PostList from "$lib/PostList.svelte";

    type Props = {
        data: PageServerData
    }

    let {data}: Props = $props();

</script>

{#await data.ids}
    <p>waiting ...</p>
{:then postIds}
    <PostList {postIds}/>
{/await}
