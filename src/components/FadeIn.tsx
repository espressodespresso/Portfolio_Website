import {createSignal, JSX, onCleanup, onMount} from "solid-js";

interface FadeInProps {
    children: JSX.Element;
}

export default function FadeIn(props: FadeInProps) {
    let ref!: HTMLDivElement;
    const [visible, setVisible] = createSignal(false);

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref); // fade in once
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(ref);
        onCleanup(() => observer.disconnect());
    });

    return (
        <div ref={ref} class={visible() ? "fade-in visible" : "fade-in"}>
            {props.children}
        </div>
    );
}