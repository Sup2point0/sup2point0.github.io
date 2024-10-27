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
  padding: 0.25em 0.5em;
  @include font-ui;
  border-radius: 0.5em;
}

</style>
