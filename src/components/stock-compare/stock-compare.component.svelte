<script>
  import { createEventDispatcher } from "svelte";
  import Grid from "gridjs-svelte";
  import clickOutside from "../actions/click-outside.action";
  import { getColumns, getData } from "./stock-compare.helpers";

  export let selectedStocks;

  $: columns = getColumns(selectedStocks);
  $: data = getData(selectedStocks);

  const dispatch = createEventDispatcher();

  const handleClickOutside = () => {
    dispatch("onClose");
  };
</script>

<div id="stock-compare">
  <div
    class="stock-compare-content"
    use:clickOutside
    on:clickOutside={handleClickOutside}
  >
    <h1 class="title">Comparar</h1>
    <Grid {data} {columns} sort search fixedHeader />
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
    z-index: -1;
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
    overflow: auto;
  }

  :global(.gridjs-td[data-featured="true"]) {
    background: #81c784;
  }
</style>
