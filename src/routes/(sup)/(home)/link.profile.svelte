<!-- @component ProfileLink

-->

<script lang="ts">

interface Props {
  title: string;
  desc: string;
  pict: string;
  link: string;
  idx: number;
  entities: number;
}

let { title, desc, pict, link, idx, entities }: Props = $props();

</script>


<div class="container"
  style:--frac={idx / entities}
>
  <div class="profile-link">
    <img alt="" src="icons/socials/{pict}" />

    <a class="info" target="_blank" href={link}>
      <div class="content">
        <h3> {title} </h3>
        <p> {desc} </p>
      </div>
    </a>
  </div>
</div>


<style lang="scss">

@use 'sass:math';


$img-size: 2rem;
$orbit-radius: 160px;

.container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: max-content;
  transform:
    translateX(calc(-50% + $orbit-radius * cos(2 * math.$pi * var(--frac, 0))))
    translateY(calc(-50% + $orbit-radius * sin(2 * math.$pi * var(--frac, 0))));
}

.profile-link {
  position: relative;
  width: $img-size;
  animation: 37s linear infinite spinny;
  animation-direction: reverse;

  @keyframes spinny {
    from { transform: rotate(0deg); }
    to   { transform: rotate(1turn); }
  }
}

img {
  pointer-events: none;
  position: absolute;
  z-index: 3;
  top: 50%;
  height: $img-size;
  aspect-ratio: 1;
  transform: translateY(-50%);
}

a.info {
  position: absolute;
  z-index: 2;
  width: max-content;
  padding: 0.4rem 1rem 0.3rem 4rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  @include shear-card($interactive: true);
  transform: translateX(-1rem);
  transition: #{trans()};

  &::before {
    position: absolute;
    background: rgb(white, 8%);
    opacity: 0;
  }

  .content {
    opacity: 0;
  }

  &:where(:hover, :focus-visible, :active) {
    padding-left: 4.2rem;
    padding-right: 1.2rem;

    .content  { opacity: 1; }
    &::before { opacity: 1; }
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

:global(.anim-container:hover),
:global(.container:has(a.info:hover) ~ .container)
{
  a.info .content, a.info::before {
    opacity: 1;
  }
}

</style>
