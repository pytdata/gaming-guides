<script>
    /** @type {import('./$types').PageData} */

    export let data;
    // console.log(data.guides)
</script>

<div class="guides">
    <h2>{data.guide.id}):&nbsp;{data.guide.title}</h2><hr>
    <p>{data.guide.body}</p>
</div>

<style>
    .guides{
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>