<script lang="ts">

export let id: string;
export let title: string;
export let desc: string;
export let pict: string;
export let link: string;

</script>


<div class="profile-link">
  <a target="_blank" href={link}>
    <img {id} alt={title} src={pict}>
  </a>

  <div class="dropdown">
    <p class="title"> {title} </p>
    <p class="desc"> {desc} </p>
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

.profile-link {
  margin: 0 0.5rem;
}

.dropdown {
  position: absolute;
  display: none;
  background-color: $col-overlay;

  @include trans-ease-out;

  .profile-link:where(:hover, :focus, :focus-within) & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p.title {
    @include font-tech;
    font-size: 100%;
  }

  p.desc {
    @include font-tech;
    font-size: 80%;
    color: $grey-nova;
  }
}

</style>
