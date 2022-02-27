<script>
  import Main from "./pages/main/main.page.svelte";
</script>

<div id="main">
  <div class="content">
    <Main />
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  #main {
    display: flex;
    height: 100vh;
    position: relative;
    font-family: "Open Sans", sans-serif;
    z-index: 1;
    overflow: auto;
  }

  #main > .content {
    width: 1192px;
    height: 100%;
    display: flex;
    margin: auto;
    z-index: 1;
  }
</style>
