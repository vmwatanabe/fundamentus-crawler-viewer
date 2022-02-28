<script>
  export let selectedStocks;
</script>

<div id="stock-compare">
  <div class="stock-compare-content">
    <h1 class="title">Comparar</h1>
    <div>{selectedStocks?.join(", ")}</div>
  </div>
</div>

<style>
  #stock-compare {
    position: fixed;
    top: 10vh;
    left: 10vw;
    width: 80vw;
    height: 80vh;
  }

  #stock-compare::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
  }

  .title {
    margin: 0 0 1rem 0;
  }

  .stock-compare-content {
    position: relative;
    width: 100%;
    background: white;
    z-index: 1;
    padding: 1rem;
    border-radius: 4px;
  }
</style>
