import {createEffect, createResource, createSignal, JSXElement, onMount, Show} from "solid-js";
import NavSection from "./nav/NavSection.tsx";
import NavLink from "./nav/NavLink.tsx";
import NavSubLinks from "./nav/NavSubLinks.js";
import NavSubSection from "./nav/NavSubSection.js";

const [showSubSection, setShowSubSection] = createSignal(false);
const [currentSubSection, setCurrentSubSection] = createSignal("");

createEffect(() => {
    const handleSubSection = () => {
        if(!window.location.pathname.includes("project")) {
            setShowSubSection(false);
        }
    }

    window.addEventListener("click", handleSubSection);

    return () => {
        window.removeEventListener("click", handleSubSection);
    }
})

export default function Navbar(): JSXElement {
    return (
        <div class="fixed flex" id="nav">
            <div class="pt-5 pl-7 pr-7 min-h-dvh" id="nav-theme">
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold">Directory</h1>
                    <NavSection header="Homepage" href="/">
                        <NavLink name="About me" href="/#about_me"/>
                        <NavLink name="Featured" href="/#featured"/>
                        <NavLink name="Experience" href="/#experience"/>
                        <NavLink name="Contact me" href="/#contact_me"/>
                    </NavSection>
                    <br/>
                    <NavSection header="Projects">
                        <NavSubSection setShowSubSection={setShowSubSection}
                                       setCurrentSubSection={setCurrentSubSection}
                                       currentSubSection={currentSubSection}
                                       showSubSection={showSubSection}
                                       id="attendance"
                                       nav_name="Attendance (TS)"/>
                        <NavSubSection setShowSubSection={setShowSubSection}
                                       setCurrentSubSection={setCurrentSubSection}
                                       currentSubSection={currentSubSection}
                                       showSubSection={showSubSection}
                                       id="bank_api"
                                       nav_name="Bank API (C#)"/>
                        <NavSubSection setShowSubSection={setShowSubSection}
                                       setCurrentSubSection={setCurrentSubSection}
                                       currentSubSection={currentSubSection}
                                       showSubSection={showSubSection}
                                       id="tetris"
                                       nav_name="Tetris (C#)"/>
                        <NavSubSection setShowSubSection={setShowSubSection}
                                       setCurrentSubSection={setCurrentSubSection}
                                       currentSubSection={currentSubSection}
                                       showSubSection={showSubSection}
                                       id="messaging"
                                       nav_name="Messaging (Java)"/>
                    </NavSection>
                    <br/>
                    <NavSection header="Contact Me" href="/#contact_me">
                        <NavLink name="X (Twitter)" target="_blank" href="https://twitter.com/ThatDuds"/>
                        <NavLink name="Linkedin" target="_blank" href="https://www.linkedin.com/in/harry-martel-062151230/"/>
                        <NavLink name="Email" target="_blank" href="mailto:harry.martel@hotmail.com"/>
                    </NavSection>
                    <p class="absolute bottom-4 left-6 opacity-40 italic text-xs">Made by Harry Martel</p>
                </div>
            </div>
            <button type="button" class="pl-5 pt-8" id="nav-toggle" onclick={() => {
                const nav_theme: HTMLElement = (document.getElementById("nav-theme") as HTMLElement);
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
    )
}