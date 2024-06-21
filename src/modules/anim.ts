export default function processAnimations(selector: string){
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anim-show");
      } else if (!entry.target.classList.contains("once")) {
        entry.target.classList.remove("anim-show");
      }
    });
  });

  let targets = document.querySelectorAll(selector);
  targets.forEach(target => observer.observe(target));
}
