import {createEffect, createSignal, For, JSXElement, onCleanup, Show} from "solid-js";
import {Params, useParams} from "@solidjs/router";
import Query from "../components/Query.tsx";
import DynamicBackground, {options} from "../components/dynamic/DynamicBackground.js";
import Card, {cardTypes} from "../components/cards/Card.js";
import Tech from "../components/Tech.js";
import SocialButtonGroup from "../components/buttons/SocialButtonGroup.js";
import DynamicSpacer from "../components/dynamic/DynamicSpacer.js";
import FeaturesCard from "../components/cards/FeaturesCard.js";
import createPreventScroll from "solid-prevent-scroll";
import Layout from "../components/Layout.js";
import FadeIn from "../components/FadeIn.tsx";
import {IoCheckmarkCircleOutline} from "solid-icons/io";

type Project = {
    id: string;
    name: string;
    description: string;
    title_color: string;
    gradient_color: string;
    section_color: string;
    tech_stack: {
        title: string;
        techs: {
            title: string;
            level: string;
        }[];
    }[];
    features: {
        emoji: string;
        title: string;
        description: string;
    }[];
    slider_images: string[];
    github_readme: string;
    github_project: string;
};

type Preview = {
    type: "image" | "readme";
    src: string;
};

export default function Projects(): JSXElement {
    const params = useParams<{ name: string }>();

    const [project, setProject] = createSignal<Project | null>(null);
    const [loading, setLoading] = createSignal(true);
    const [preview, setPreview] = createSignal<Preview | null>(null);

    let scrollContainer: HTMLDivElement | undefined;

    createEffect(() => {
        const projectName = params.name;
        if (!projectName) {
            setProject(null);
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const fetchProject = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://${import.meta.env.VITE_IP}:4000/projects/${encodeURIComponent(projectName)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch project: ${response.status}`);
                }

                const data: Project = await response.json();
                setProject(data);
            } catch (error) {
                if (!controller.signal.aborted) {
                    console.error("Error fetching project:", error);
                    setProject(null);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchProject();
        onCleanup(() => controller.abort());
    });

    const scrollSlider = (direction: number) => {
        if (!scrollContainer) return;
        const imageWidth = scrollContainer.querySelector("img")?.clientWidth ?? 0;
        scrollContainer.scrollBy({
            left: direction * imageWidth,
            behavior: "smooth"
        });
    };

    const scrollLeft = () => scrollSlider(-1);
    const scrollRight = () => scrollSlider(1);
    const openPreview = (type: Preview["type"], src: string) => {
        setPreview({ type, src });
    };

    const closePreview = () => setPreview(null);
    createPreventScroll({
        element: () => document.body,
        enabled: () => preview() !== null
    });

    return (
        <Show when={project()} keyed fallback={<Query />}>
            {(currentProject) => {
                return (
                    <Layout>
                        <div class="flex-col text-center">
                            <FadeIn>
                                <DynamicBackground
                                    class={currentProject.title_color}
                                    id={currentProject.id as keyof typeof options}
                                >
                                    <div class="absolute inset-0 backdrop-blur-sm" />
                                    <div class="relative z-10 flex flex-col items-center justify-center">
                                        <h1 class="text-6xl font-bold">{currentProject.name}</h1>
                                        <h3 class="pt-1">{currentProject.description}</h3>
                                        <p class="pt-2 text-sm italic">↓ Scroll for more information below! ↓</p>
                                    </div>
                                </DynamicBackground>
                            </FadeIn>
                            <div class={`min-h-20`}
                                 style={{
                                    background: `linear-gradient(${currentProject.gradient_color}, ${currentProject.section_color})`
                                }}/>
                            <div class="text-white">
                                <section
                                    id="tech_stack"
                                    class="flex flex-col"
                                    style={{
                                        background: currentProject.section_color
                                    }}>
                                    <h1 class="text-4xl font-bold">Tech Stack </h1>
                                    <h4 class="pt-1 italic">Full-stack Typescript Approach=</h4>
                                    <br />
                                    <div class={`grid place-items-center ${
                                        currentProject.tech_stack.length === 1
                                            ? "grid-cols-1"
                                            : "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
                                    }`}>
                                        <For each={currentProject.tech_stack}>
                                            {(stack) => (
                                                <Card
                                                    type={cardTypes.project}
                                                    title={stack.title}
                                                    disabled_link={true}
                                                    flipped={true}
                                                >
                                                    <For each={stack.techs}>
                                                        {(tech) => (
                                                            <Tech
                                                                flipped={true}
                                                                title={tech.title}
                                                                level={tech.level}
                                                                icon={
                                                                    <IoCheckmarkCircleOutline
                                                                        class="size-10 text-white"
                                                                    />
                                                                }
                                                            />
                                                        )}
                                                    </For>
                                                </Card>
                                            )}
                                        </For>
                                    </div>
                                </section>
                                <DynamicSpacer id={currentProject.id} />
                                <section
                                    id="features"
                                    class="flex flex-col bg-[#001220]"
                                >
                                    <h1 class="text-4xl font-bold">Features</h1>
                                    <div class="grid max-w-5xl pt-4 text-gray-200 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                                        <For each={currentProject.features}>
                                            {(feature) => (
                                                <FeaturesCard
                                                    emoji={feature.emoji}
                                                    title={feature.title}
                                                    description={feature.description}
                                                />
                                            )}
                                        </For>
                                    </div>
                                </section>
                                <div class="spacer projectSpacer2" />
                                <section
                                    id="screenshots"
                                    class="flex flex-col bg-[#2C3A4A]"
                                >
                                    <h1 class="text-4xl font-bold">Screenshots</h1>
                                    <h4 class="pb-4 pt-1 italic">Click on an image to enlarge it...</h4>
                                    <div class="flex flex-row rounded-3xl bg-gray-700">
                                        <button
                                            type="button"
                                            onClick={scrollLeft}
                                            aria-label="Scroll screenshots left"
                                            class="transition-transform ease-in-out hover:scale-125"
                                        >
                                            <svg
                                                width="32"
                                                height="24"
                                                viewBox="0 0 32 24"
                                                fill="white"
                                            >
                                                <path d="M28 2v4l-12 6 12 6v4l-16-10 16-10z" />
                                            </svg>
                                        </button>
                                        <div class="max-w-300 p-4">
                                            <div
                                                id="slider"
                                                ref={scrollContainer}
                                                class="flex flex-row overflow-x-auto scroll-smooth"
                                            >
                                                <For each={currentProject.slider_images}>
                                                    {(image) => (
                                                        <button
                                                            type="button"
                                                            onClick={() => openPreview("image", image)}
                                                            class="shrink-0"
                                                            aria-label="Enlarge screenshot"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt="Project screenshot"
                                                                loading="lazy"
                                                                class="h-auto w-140 p-2"
                                                            />
                                                        </button>
                                                    )}
                                                </For>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={scrollRight}
                                            aria-label="Scroll screenshots right"
                                            class="transition-transform ease-in-out hover:scale-125"
                                        >
                                            <svg
                                                width="32"
                                                height="24"
                                                viewBox="0 0 32 24"
                                                fill="white"
                                            >
                                                <path d="M4 2l16 10-16 10v-4l12-6-12-6V2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </section>
                                <div class="spacer projectSpacer3" />
                                <section
                                    id="github"
                                    class="flex flex-col bg-[#3B4859]"
                                >
                                    <h1 class="text-4xl font-bold">Github</h1>
                                    <h4 class="pt-1 italic">Links to relevant Github repositories...</h4>
                                    <div class="grid grid-cols-1 p-5 lg:grid-cols-2">
                                        <button
                                            type="button"
                                            onClick={() => openPreview("readme", currentProject.github_readme)}
                                            class="mb-2 w-60 rounded-xl border-2 border-gray-500 bg-gray-300 py-4 text-sm font-bold text-black opacity-85 transition-transform ease-in-out hover:scale-110"
                                        >
                                            Open README.md
                                        </button>
                                        <a
                                            href={currentProject.github_project}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="mb-2 w-60 rounded-xl border-2 border-gray-500 bg-gray-300 py-4 text-sm font-bold text-black opacity-85 transition-transform ease-in-out hover:scale-110"
                                        >
                                            Open Project
                                        </a>
                                    </div>
                                </section>
                                <div class="bg-[#3B4859]">
                                    <br />
                                    <SocialButtonGroup inverted={true} />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <Show when={preview()} keyed>
                            {(activePreview) => (
                                <div
                                    class="fixed inset-0 z-50 grid place-items-center"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-label={activePreview.type === "image" ? "Screenshot preview" : "README preview"}
                                    onClick={closePreview}
                                >
                                    <div class="absolute inset-0 bg-black/50 backdrop-blur-lg" />
                                    <Show
                                        when={activePreview.type === "image"}
                                        fallback={
                                            <iframe
                                                src={activePreview.src}
                                                title="Project README"
                                                class="relative z-10 h-[80vh] w-full max-w-4xl rounded-xl bg-white"
                                                onClick={(event) => event.stopPropagation()}
                                            />
                                        }
                                    >
                                        <img
                                            src={activePreview.src}
                                            alt="Enlarged project screenshot"
                                            class="relative z-10 max-h-[90vh] max-w-[90vw] object-contain"
                                            onClick={(event) => event.stopPropagation()}
                                        />
                                    </Show>
                                    <button
                                        type="button"
                                        onClick={closePreview}
                                        aria-label="Close preview"
                                        class="nav-theme absolute right-4 top-4 z-20 m-2 rounded-2xl p-1.5 transition-transform ease-in-out hover:scale-125"
                                    >
                                        <svg
                                            width="35"
                                            height="35"
                                            viewBox="0 0 50 50"
                                            fill="black"
                                        >
                                            <path d="M7.71875 6.28125L6.28125 7.71875L23.5625 25L6.28125 42.28125L7.71875 43.71875L25 26.4375L42.28125 43.71875L43.71875 42.28125L26.4375 25L43.71875 7.71875L42.28125 6.28125L25 23.5625Z" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </Show>
                    </Layout>
                );
            }}
        </Show>
    );
}