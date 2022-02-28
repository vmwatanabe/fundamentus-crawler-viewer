<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = (e) => {
    dispatch("click", e);
  };

  $: buttonClass = `button-component ${$$props.class ?? ""}`;
</script>

<button class={buttonClass} type="button" on:click={handleClick}
  ><slot /></button
>

<style>
  .button-component {
    background-color: #ea4c89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-component:hover,
  .button-component:focus {
    background-color: #f082ac;
  }
</style>
