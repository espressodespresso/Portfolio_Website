import {createEffect, createResource, createSignal, JSXElement, onMount, Show} from "solid-js";
import NavSection from "./nav/NavSection.tsx";
import NavLink from "./nav/NavLink.tsx";
import NavSubLinks from "./nav/NavSubLinks.js";
import NavSubSection from "./nav/NavSubSection.js";
import {useLocation} from "@solidjs/router";
import createPreventScroll from "solid-prevent-scroll";
import NavDiv from "./nav/NavDiv.js";

export default function Navbar(): JSXElement {
    const [showSubSection, setShowSubSection] = createSignal(false);
    const [currentSubSection, setCurrentSubSection] = createSignal("");
    const [scrollActive, setScrollActive] = createSignal(false);

    createEffect(() => {
        const location = useLocation();
        if(location.pathname.includes("project")) {
            setShowSubSection(true);
        }
    })

    createPreventScroll({
        enabled: scrollActive
    })

    return (
        <nav>
            <div class="hidden md:fixed md:flex" id="nav">
                <div class="pt-5 pl-7 pr-7 min-h-dvh nav-theme">
                    <NavDiv setShowSubSection={setShowSubSection}
                            setCurrentSubSection={setCurrentSubSection}
                            currentSubSection={currentSubSection}
                            showSubSection={showSubSection}
                            watermark={true}
                            scrollActive={scrollActive()}
                            activeSubLinks={true}/>
                </div>
                <button type="button" class="pl-5 pt-8" id="nav-toggle" onClick={() => {
                    const nav_theme: HTMLElement = (document.getElementsByClassName("nav-theme")[0] as HTMLElement);
                    nav_theme.classList.toggle("redact-nav");
                    const nav_toggle: HTMLElement = (document.getElementById("nav-toggle") as HTMLElement);
                    nav_toggle.classList.toggle("redact-toggle");
                }}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                         clip-rule="evenodd" fill="grey" fill-opacity="0.6">
                        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
                    </svg>
                </button>
            </div>
            <div class="md:hidden sm:fixed sm:flex">
                <Show when={scrollActive()}>
                    <div class="fixed w-dvw h-dvh left-0 top-0 grid nav-theme z-[90] place-content-center">
                        <NavDiv setShowSubSection={setShowSubSection}
                                setCurrentSubSection={setCurrentSubSection}
                                currentSubSection={currentSubSection}
                                showSubSection={showSubSection}
                                watermark={false}
                                scrollActive={scrollActive()}
                                activeSubLinks={false}/>
                    </div>
                </Show>
                <div class="fixed right-0 top-0 z-[95]">
                    <button type="button" class="p-2 nav-theme rounded-2xl m-2" onClick={() => setScrollActive(!scrollActive())}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             x="0px"
                             y="0px"
                             width="30"
                             height="30"
                             viewBox="0 0 50 50" fill="black">
                            <path
                                d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001
                                 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3
                                 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    )
}