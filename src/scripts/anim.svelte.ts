import { expoInOut } from "svelte/easing";


export const expoSlide = { duration: 800, easing: expoInOut };

export function anim(node: HTMLElement)
{
	if (!node) {
		console.warn("failed to attach animation handler!");
		return;
	};

	let intersected = false;
	
	let observer = new IntersectionObserver(
		entries => {
			for (let entry of entries)
			{
				if (!intersected && entry.isIntersecting) {        
					entry.target.classList.add("intersected");

					let left = entry.boundingClientRect.left;
					let top = entry.boundingClientRect.top;
					let delay = calc_delay(left, top);
					node.style.setProperty("--delay", delay);
				}
			}
		},
		{
			threshold: 0.5,
		}
	);

	observer.observe(node);

	return () => observer.unobserve(node);
}


function calc_delay(left: number, top: number, scale: number = 1): string
{
	return `calc(
			(${left}px / 100vw) * ${200 * scale}ms
		+ (${top}px / 100vh) * ${100 * scale}ms
	)`;
}
