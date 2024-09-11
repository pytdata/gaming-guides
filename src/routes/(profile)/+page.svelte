<script>
    let title_ = "Awesome"
    const newTitle = ()=>{
        title_ = 'Gaming guide Version 3.45'
    }
</script>

<div class="index">
    <nav>
        <a href="/">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/about">About Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/guides">Guides</a>
    </nav>
    <h1>This is Gonna be {title_}</h1>
    <p>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. 
        Quo repellendus minima sapiente mollitia, 
        unde accusantium possimus, quidem laborum 
        laudantium repellat, dolorem magnam aut dolor 
        officiis quod eveniet vero quos qui.</p>
        
        <button class="btn btn-sm btn-info" on:click={newTitle}>Update Title</button>
        <input type="text" bind:value={title_}>
</div>

<style>
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>