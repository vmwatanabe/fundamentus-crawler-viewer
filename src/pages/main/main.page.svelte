<script>
  import StockList from "../../components/stock-list/stock-list.component.svelte";
</script>

<div id="main-page">
  <h1>Magic Formula</h1>

  <StockList />
</div>

<style>
  #main-page {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
