<script lang="ts">

export let id: string;
export let text: string;
export let pict: string;
export let link: string;

</script>


<div class="profile-link">
  <a target="_blank" href={link}>
    <img {id} alt={text} src={pict}>
  </a>

  <div class="dropdown">
    <p> {text} </p>
  </div>
</div>


<style lang="scss">

a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

img {
  width: 36px;
  height: 36px;
}

.dropdown {
  display: none;
  background-color: $col-overlay;

  .profile-link:where(:hover, :focus, :focus-within) & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  p {
    @include font-tech;
    font-size: 80%;
  }
}

</style>
