<script>
  import Grid from "gridjs-svelte";
  import Button from "../../components/button/button.component.svelte";
  import StockCompare from "../stock-compare/stock-compare.component.svelte";
  import data from "../../data.json";
  import { getColumns } from "./stock-list.helpers";

  let columns = getColumns();
  let instance;
  let selectedIds = [];
  let compareVisibility = false;

  $: hasSelectedIds = Boolean(selectedIds);

  $: selectedStocks = selectedIds?.map((id) =>
    data.find((elem) => elem.papel === id)
  );

  const handleCompareClick = () => {
    compareVisibility = true;
  };

  const handleSelectionChange = ({ rowIds }) => {
    selectedIds = [...rowIds];
  };
</script>

<div id="stock-list">
  <Grid
    bind:instance
    {data}
    {columns}
    sort
    search
    fixedHeader
    on:ready={(e) => {
      const checkboxPlugin = instance?.config.plugin.get("selection");

      checkboxPlugin.props.store.on("updated", handleSelectionChange);
    }}
  />
  {#if hasSelectedIds}
    <div class="button-container">
      <Button on:click={handleCompareClick}>Comparar</Button>
    </div>
  {/if}
  {#if compareVisibility}
    <StockCompare bind:selectedStocks />
  {/if}
</div>

<style>
  div#stock-list {
    overflow: auto;
  }

  .button-container {
    position: fixed;
    bottom: 1rem;
    right: 10vw;
  }
</style>
