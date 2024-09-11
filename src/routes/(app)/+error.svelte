<script>
	import { page } from '$app/stores';

	const go_back=()=>{
		history.back()
	}
</script>

<div class="error">
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
	<p>
		<button on:click={go_back}>Go Back</button>
		<button><a href='/guides'>View all Guides</a></button>
	</p>
</div>


<style>
	.error{
		text-align: center;
		margin-bottom: 60px;
	}
	p{
		text-align: center;
		display: flex;
		margin: 0 auto;
	}
	button{
		padding: 12px;
		text-align: center;
		background: transparent;
		border-radius: 6px;
		min-width: 130px;
		cursor: pointer;
	}
</style>