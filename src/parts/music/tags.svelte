<!-- @component Tags -->
<script lang="ts">

export let tags: string[] = [];

</script>


<div class="tags">
  {#each tags as tag}
    <span class="tag"> {tag} </span>
  {/each}
</div>


<style lang="scss">

.tags {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.2em 0.8em 0.4em;
  @include font-ui;
  background-color: $col-prot;
  border-radius: 0.8em;

  transition: background-color 0.16s ease-out;

  &:hover {
    background-color: #ee0080;
  }
}

</style>
