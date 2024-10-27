<!-- @component Tags -->
<script lang="ts">

export let tags: string[] = [];

</script>


<div class="part tags">
  {#each tags as tag}
    <span class="tag"> {tag} </span>
  {/each}
</div>


<style lang="scss">

.part {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 0.5rem;

  &:hover {

  }
}

.tag {
  padding: 0.2em 0.8em 0.4em;
  @include font-ui;
  background-color: $col-prot;
  border-radius: 0.8em;
}

</style>
