export class AnimationData {
  intersected: boolean = $state(false);
  left: number = $state(0);
  top: number = $state(0);
}


export function register_animation(root: HTMLElement, anim: AnimationData): void
{
  if (!root) return;
  
  let observer = new IntersectionObserver(entries => {
    for (let entry of entries) {
      if (!anim.intersected && entry.isIntersecting) {        
        anim.intersected = true;
        anim.left = entry.boundingClientRect.left;
        anim.top = entry.boundingClientRect.top;
      }
    }
  }, {
    threshold: 0.2,
  });

  observer.observe(root);
}


export function calc_delay(anim: AnimationData, scale: number = 1): string
{
  return `calc(
      (${anim.left}px / 100vw) * ${300 * scale}ms
    + (${anim.top}px / 100vh) * ${100 * scale}ms
  )`;
}
