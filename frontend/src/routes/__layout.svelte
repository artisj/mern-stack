<script>
    // @ts-ignore
import Header from "$lib/components/header.svelte";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}
</style>

<div class='container'>
<Header />
<slot />
</div>