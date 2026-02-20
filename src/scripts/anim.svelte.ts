export class AnimationData
{
  intersected: boolean = $state(false);
  left: number = 0;
  top: number = 0;
}


export function anim(node: HTMLElement): void
{
  let anim = new AnimationData();

  register_animation(node, anim);

  /* @ts-ignore */
  node.style["--delay"] = calc_delay(anim, 0.2);
}


/** DEPRECATED */
export function register_animation(root: HTMLElement, anim: AnimationData)
{
  if (!root) {
    console.warn("failed to attach animation handler!");
    return;
  };
  
  let observer = new IntersectionObserver(
    entries => {
      for (let entry of entries)
      {
        if (!anim.intersected && entry.isIntersecting) {        
          entry.target.classList.add("intersected");
          anim.intersected = true;
          anim.left = entry.boundingClientRect.left;
          anim.top = entry.boundingClientRect.top;
        }
      }
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(root);

  return () => observer.unobserve(root);
}

/** DEPRECATED */
export function calc_delay(anim: AnimationData, scale: number = 1): string
{
  return `calc(
      (${anim.left}px / 100vw) * ${300 * scale}ms
    + (${anim.top}px / 100vh) * ${100 * scale}ms
  )`;
}
