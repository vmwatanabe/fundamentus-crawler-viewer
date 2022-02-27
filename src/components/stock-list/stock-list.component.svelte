<script>
  import Grid from "gridjs-svelte";
  import data from "../../data.json";
  import { getColumns } from "./stock-list.helpers";

  let columns = getColumns();
</script>

<div id="stock-list">
  <Grid {data} {columns} sort />
</div>

<style>
  div#stock-list {
    overflow: auto;
  }
</style>
