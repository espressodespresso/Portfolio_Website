import {JSXElement} from "solid-js";
import NavSection from "./nav/NavSection.tsx";
import NavLink from "./nav/NavLink.tsx";

export default function Navbar(): JSXElement {
    return (
        <div class="fixed flex" id="nav">
            <div class="pt-5 pl-7 pr-7 min-h-dvh" id="nav-theme">
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold">Directory</h1>
                    <NavSection header="Homepage" href="/">
                        <NavLink name="About me" href="#about_me"/>
                        <NavLink name="Featured" href="#featured"/>
                        <NavLink name="Experience" href="#experience"/>
                        <NavLink name="Contact me" href="#contact_me"/>
                    </NavSection>
                    <br/>
                    <NavSection header="Projects">
                        <NavLink name="Attendance (TS)" href="/project/attendance"/>
                        <NavLink name="Snake (Rust)" href="/project/snake"/>
                        <NavLink name="Tetris (C#)" href="/project/tetris"/>
                        <NavLink name="Messaging (Java)" href="/project/messaging"/>
                    </NavSection>
                    <br/>
                    <NavSection header="Contact Me">
                        <NavLink name="X (Twitter)" href="https://twitter.com/ThatDuds"/>
                        <NavLink name="Linkedin" href="https://www.linkedin.com/in/harry-martel-062151230/"/>
                        <NavLink name="Email" href="mailto:harry.martel@hotmail.com"/>
                    </NavSection>
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