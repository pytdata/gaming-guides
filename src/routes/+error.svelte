<script>
	import Title from "$lib/title.svelte";
	import { page } from '$app/stores';
	import '../styles/global.css'

	const go_back=()=>{
		history.back()
	}
</script>
<Title title="Error Page"/>
<div class="error">
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p><br><br><br>
	<p>
		<button on:click={go_back}>Go Back uiy</button>
		<a href='/guides'>View all Guides</a>
	</p>
</div>


<style>
	.error{
        text-align: center;
        margin-bottom: 60px;
    }
    .error{
        text-align: center;
        margin-bottom: 60px;
    }
    p{
        text-align: center;
        display: block;
        margin: 0 auto;
    }
    button{
        padding: 12px;
        text-align: center;
        background: yellow;
        border-radius: 6px;
        min-width: 130px;
        cursor: pointer;
    }
</style>