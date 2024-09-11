<script>
    /** @type {import('./$types').PageData} */

    export let data
    // console.log(data.guides)
</script>

<div class="guides">
    <!-- <div>{data.post.guides[0].title}</div> -->
    <ul>
        {#each data.guides as guide}
            <li>
                <a data-sveltekit-preload-data href={`/guides/${guide.id}`}>{guide.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides{
        margin-top: 20px;
    }
    ul{
        list-style-type: none;
        padding: 20px auto;
    }
    li>a{
        display: inline-block;
        margin-top: 30px;
        padding: 10px;
        border: 1px  dotted rgba(255, 255, 255, 0.2);
    }
</style>