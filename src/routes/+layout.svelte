<script>

import "#styles/essence.scss";

</script>


<div id="page">
  <main>
    <slot> Uh, something has gone really, really wrong! </slot>
  </main>
</div>


<style lang="scss">

#page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 100%;
  max-width: max(80vw, 800px);
}

</style>
