<script>
    import Title from "$lib/title.svelte";
    import '../../styles/global.css'
</script>

<header>
    <Title title="Ninja Gaming"/>
</header>
<main>
    <!-- page content -->
    <slot></slot>
</main>
<footer>
    <p>&#169; 2024 DataGlow Ninja Gaming Guides</p>
</footer>

<style>
    header{
        display: flex;
        justify-content: center;
    }
    main{
        max-width: 100%;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
</style>