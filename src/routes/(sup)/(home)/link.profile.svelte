<!-- @component ProfileLink

-->

<script lang="ts">

interface Props {
  title: string;
  desc: string;
  pict: string;
  link: string;
  transform?: string;
}

let { title, desc, pict, link, transform }: Props = $props();

</script>


<div class="container"
  style:transform
>
  <a class="profile-link" target="_blank" href={link}>
    <div class="img-container">
      <img alt={title} src="ui/icons/{pict}" />
    </div>

    <div class="info">
      <h3> {title} </h3>
      <p> {desc} </p>
    </div>
  </a>
</div>


<style lang="scss">

.container {
  position: absolute;
}

a.profile-link {
  padding: 0.4rem 1rem 0.3rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  @include shear-card($interactive: true);
  transition: #{trans()};

  &::before {
    background: rgb(white, 8%);
    opacity: 0;
  }

  &:hover, &:focus, &:active {
    padding-left: 1.2rem;
    padding-right: 1.2rem;

    &::before {
      opacity: 1;
    }
  }
}

:global(img#purple-portal:hover ~ .root),
:global(.container:has(a.profile-link:hover) ~ .container),
:global(.container:has(~ .container a.profile-link:hover))
{
  a.profile-link::before, .info {
    opacity: 1;
  }
}


.img-container {
  height: 2rem;

  img {
    height: 2rem;
    aspect-ratio: 1 / 1;
  }
}


.info {
  opacity: 0;
  transition: #{trans()};

  a:where(:hover, :focus, :active) & {
    opacity: 1;
  }

  h3 {
    @include font-fun;
    font-weight: normal;
    font-size: 150%;
    line-height: 100%;
    color: $col-deut;
  }

  p {
    @include font-ui;
    font-size: 75%;
    color: $col-text;
  }
}

</style>
