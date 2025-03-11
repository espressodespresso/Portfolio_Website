import {Accessor, JSXElement, Setter, Show} from "solid-js";
import NavSection from "./NavSection.js";
import NavLink from "./NavLink.js";
import NavSubSection from "./NavSubSection.js";

interface NavDivProps {
    setShowSubSection: Setter<boolean>,
    setCurrentSubSection: Setter<string>,
    currentSubSection: Accessor<string>,
    showSubSection: Accessor<boolean>,
    watermark: boolean,
    scrollActive: boolean
}

export default function NavDiv(props: NavDivProps): JSXElement {
    return (
        <div class="flex flex-col">
            <h1 class={`text-2xl font-bold ${props.scrollActive ? "self-center text-4xl p-1" : ""}`}>Directory</h1>
            <NavSection header="Homepage"
                        headerClass={`${props.scrollActive ? "text-3xl p-1" : "text-xl"}`}
                        href={`/ ${props.scrollActive ? "place-items-center text-xl p-1" : ""}`}>
                <NavLink name="About me" href="/#about_me"/>
                <NavLink name="Featured" href="/#featured"/>
                <NavLink name="Experience" href="/#experience"/>
                <NavLink name="Contact me" href="/#contact_me"/>
            </NavSection>
            <br/>
            <NavSection header="Projects"
                        headerClass={`${props.scrollActive ? "text-3xl p-1" : "text-xl"}`}
                        href={`${props.scrollActive ? "place-items-center text-xl p-1" : ""}`}>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="attendance"
                               nav_name="Attendance (TS)"/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="bank_api"
                               nav_name="Bank API (C#)"/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="tetris"
                               nav_name="Tetris (C#)"/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="messaging"
                               nav_name="Messaging (Java)"/>
            </NavSection>
            <br/>
            <NavSection header="Contact Me"
                        headerClass={`${props.scrollActive ? "text-3xl p-1" : "text-xl"}`}
                        href={`/#contact_me ${props.scrollActive ? "place-items-center text-xl p-1" : ""}`}>
                <NavLink name="X (Twitter)" target="_blank" href="https://twitter.com/ThatDuds"/>
                <NavLink name="Linkedin" target="_blank"
                         href="https://www.linkedin.com/in/harry-martel-062151230/"/>
                <NavLink name="Email" target="_blank" href="mailto:harry.martel@hotmail.com"/>
            </NavSection>
            <Show when={props.watermark}>
                <p class="absolute bottom-4 left-6 opacity-40 italic text-xs">Made by Harry Martel</p>
            </Show>
        </div>
    )
}