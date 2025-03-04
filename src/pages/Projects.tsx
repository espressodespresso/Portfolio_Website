import {createEffect, createSignal, For, JSXElement} from "solid-js";
import {Params, useParams} from "@solidjs/router";
import Query from "../components/Query.tsx";
import DynamicBackground from "../components/dynamic/DynamicBackground.js";
import Card, {cardTypes} from "../components/cards/Card.js";
import Tech from "../components/Tech.js";
import SocialButtonGroup from "../components/buttons/SocialButtonGroup.js";
import DynamicSpacer from "../components/dynamic/DynamicSpacer.js";
import FeaturesCard from "../components/cards/FeaturesCard.js";
import createPreventScroll from "solid-prevent-scroll";
import Layout from "../components/Layout.js";

export default function Projects(): JSXElement {
    const params: Params = useParams();
    const [project, setProject] = createSignal(null);
    const [error, setError] = createSignal<string | null>(null);

    createEffect(() => {
        const projectName: string = params.name;
        if(projectName) {
            fetch(`http://localhost:4000/projects/${projectName}`)
                .then((response: Response) => response.json())
                .then((data) => setProject(data))
                .catch((error) => setError(error));
        }
    })

    const [scrollActive, setScrollActive] = createSignal(false);
    const [enlargeType, setEnlargeType] = createSignal(true);

    let scrollContainer: HTMLDivElement | undefined;
    let enlargedImageElement: HTMLImageElement | undefined;
    let enlargedImageContainer: HTMLDivElement | undefined;
    let enlargedIFrameElement: HTMLIFrameElement | undefined;
    let toggleEnlargeButton: HTMLButtonElement | undefined;

    const scrollRight = () => {
        if (scrollContainer) {
            const imgWidth = scrollContainer.querySelector("img")?.clientWidth || 0;
            scrollContainer.scrollBy({ left: imgWidth});
        }
    };

    const scrollLeft = () => {
        if (scrollContainer) {
            const imgWidth = scrollContainer.querySelector("img")?.clientWidth || 0;
            scrollContainer.scrollBy({ left: -imgWidth});
        }
    };

    const toggleEnlargeImage = (event: MouseEvent) => {
        if (enlargedImageContainer && enlargedImageElement && toggleEnlargeButton) {
            setEnlargeType(false);
            enlargedImageContainer.classList.toggle("hidden");
            const imageElement: HTMLImageElement = event.currentTarget as HTMLImageElement;
            enlargedImageElement.src = imageElement.src;
            let iFrameElement: HTMLIFrameElement = ((enlargedImageElement.parentElement as HTMLDivElement).children[2] as HTMLIFrameElement);
            iFrameElement.classList.toggle("hidden");

            if(enlargedImageContainer.classList.contains("hidden")) {
                setScrollActive(false);
            } else {
                setScrollActive(true);
            }
        }
    }

    const toggleEnlargeIFrame = () => {
        if (enlargedImageContainer && enlargedIFrameElement && toggleEnlargeButton) {
            setEnlargeType(true);
            enlargedImageContainer.classList.toggle("hidden");
            enlargedIFrameElement.src = project()!["github_readme"];
            let imageElement: HTMLImageElement = ((enlargedIFrameElement.parentElement as HTMLDivElement).children[1] as HTMLImageElement);
            imageElement.classList.toggle("hidden");

            if(enlargedImageContainer.classList.contains("hidden")) {
                setScrollActive(false);

            } else {
                setScrollActive(true);
            }
        }
    }

    createPreventScroll({
        element: enlargedImageContainer,
        enabled: scrollActive
    })

    return (
        <>
            {project() ? (
                <Layout>
                    <div class="flex-col text-center">
                        <DynamicBackground id={project()!["id"]}>
                            <div class="absolute inset-0 backdrop-blur-sm"/>
                            <div class="relative z-10 flex flex-col items-center justify-center">
                                <h1 class="text-6xl font-bold">{project()!["name"]}</h1>
                                <h3 class="pt-1">{project()!["description"]}</h3>
                                <p class="text-sm italic pt-2">↓ Scroll for more information below! ↓</p>
                            </div>
                        </DynamicBackground>
                        <div class={"min-h-10"}
                             style={{
                                 background: `linear-gradient(${project()!["gradient_color"]}, ${project()!["section_color"]})`
                             }}/>
                        <div class="text-white">
                            <section class="flex flex-col"
                                     id="tech_stack"
                                     style={{
                                         background: `${project()!["section_color"]}`
                                     }}>
                                <h1 class="text-4xl font-bold">Tech Stack</h1>
                                <h4 class="pt-1 italic">Full-stack Typescript Approach</h4>
                                <br/>
                                <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-w-4xl ">
                                    <Card type={cardTypes.medium}
                                          title="Client-side"
                                          disabled_link={true}>
                                        <Tech title="Typescript"/>
                                        <Tech title="Node.js" level="via Browserify"/>
                                        <Tech title="Minification" level="via uglify.js"></Tech>
                                    </Card>
                                    <Card type={cardTypes.medium}
                                          title="Server-side"
                                          disabled_link={true}>
                                        <Tech title="Typescript"/>
                                        <Tech title="Hono" level="A Web Framework"/>
                                        <Tech title="Jest" level="A Testing Framework"></Tech>
                                    </Card>
                                </div>
                            </section>
                            <DynamicSpacer id={project()!["id"]}/>
                            <section class="bg-[#001220] flex flex-col" id="features">
                                <h1 class="text-4xl font-bold">Features</h1>
                                <div
                                    class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-w-2xl max-w-5xl text-gray-200 pt-4">
                                    <For each={project()!["features"]}>
                                        {(object) => <FeaturesCard emoji={object["emoji"]}
                                                                   title={object["title"]}
                                                                   description={object["description"]}/>}
                                    </For>
                                </div>
                            </section>
                            <div class={"spacer projectSpacer2"}/>
                            <section class="bg-[#2C3A4A] flex flex-col" id="screenshots">
                                <h1 class="text-4xl font-bold">Screenshots</h1>
                                <h4 class="pt-1 italic pb-4">Click on an image to enlarge it...</h4>
                                <div class="flex flex-row bg-gray-700 rounded-3xl">
                                    <button type="button"
                                            onClick={scrollLeft}
                                            class="ease-in-out hover:scale-125">
                                        <svg width="32"
                                             height="24"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill-rule="evenodd"
                                             clip-rule="evenodd"
                                             fill="white"
                                             fill-opacity="0.8">
                                            <path d="M28 2v4l-12 6 12 6v4l-16-10 16-10z"/>
                                        </svg>
                                    </button>
                                    <div class="p-4 max-w-300">
                                        <div id="slider"
                                             class="flex flex-row overflow-scroll scroll-smooth"
                                             ref={scrollContainer}>
                                            <For each={project()!["slider_images"]}>
                                                {(object) =>
                                                    <img src={object} onClick={toggleEnlargeImage}
                                                         class="w-140 h-auto p-2"/>}
                                            </For>
                                        </div>
                                    </div>
                                    <button type="button"
                                            onClick={scrollRight}
                                            class="ease-in-out hover:scale-125">
                                        <svg width="32"
                                             height="24"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill-rule="evenodd"
                                             clip-rule="evenodd"
                                             fill="white"
                                             fill-opacity="0.8">
                                            <path d="M4 2l16 10-16 10v-4l12-6-12-6V2z"/>
                                        </svg>
                                    </button>
                                </div>
                            </section>
                            <div class={"spacer projectSpacer3"}/>
                            <section class="bg-[#3B4859] flex flex-col" id="github">
                                <h1 class="text-4xl font-bold">Github</h1>
                                <h4 class="pt-1 italic">Links to relevant Github repositories...</h4>
                                <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-5">
                                    <a type="button"
                                       class="border-gray-500 bg-gray-300
                                 text-black border-solid rounded-xl border-2 font-bold
                                  text-sm pl-10 pr-10 pt-4 pb-4 opacity-85 mr-2 ease-in-out
                                  hover:scale-110"
                                       onClick={toggleEnlargeIFrame}>Open README.md</a>
                                    <a type="button"
                                       class="border-gray-500 bg-gray-300
                                 text-black border-solid rounded-xl border-2 font-bold
                                  text-sm pl-10 pr-10 pt-4 pb-4 opacity-85 ml-2 ease-in-out
                                  hover:scale-110"
                                       href={project()!["github_project"]}
                                       target="_blank">Open Project</a>
                                </div>
                            </section>
                            <div class="bg-[#3B4859]">
                                <br/>
                                <SocialButtonGroup inverted="true"/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div ref={enlargedImageContainer}
                         class="fixed w-full h-full left-0 top-0 grid place-items-center hidden">
                        <div class="absolute inset-0 backdrop-blur-lg"/>
                        <img src={""}
                             ref={enlargedImageElement}
                             class="w-250 h-auto relative z-10"/>
                        <iframe src={""} ref={enlargedIFrameElement}
                                class="absolute w-180 min-w-100 h-200 min-h-100"></iframe>
                        <button ref={toggleEnlargeButton}
                                class="absolute top-0 right-0 p-5 ease-in-out hover:scale-125"
                                onClick={(event) => (enlargeType() ? toggleEnlargeIFrame() : toggleEnlargeImage(event))}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 x="0px"
                                 y="0px"
                                 width="35"
                                 height="35"
                                 fill="white"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                            </svg>
                        </button>
                    </div>
                </Layout>
            ) : error() ? (
                <Query/>
            ) : (
                <Query/>
            )}
        </>
    )
}