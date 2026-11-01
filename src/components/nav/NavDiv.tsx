import {Accessor, JSXElement, Setter, Show} from "solid-js";
import NavSection from "./NavSection.js";
import NavLink from "./NavLink.js";
import NavSubSection from "./NavSubSection.js";
import {SiTypescript} from "solid-icons/si";
import {TbOutlineBrandCSharp} from "solid-icons/tb";
import {AiOutlineJava} from "solid-icons/ai";
import {FaSolidGraduationCap} from "solid-icons/fa";
import {HiOutlineChevronRight} from "solid-icons/hi";

interface NavDivProps {
    setShowSubSection: Setter<boolean>,
    setCurrentSubSection: Setter<string>,
    currentSubSection: Accessor<string>,
    showSubSection: Accessor<boolean>,
    watermark: boolean,
    scrollActive: boolean,
    activeSubLinks: boolean
}

export default function NavDiv(props: NavDivProps): JSXElement {
    return (
        <div class="flex flex-col w-52">
            <h1 class={`text-4xl font-bold ${props.scrollActive ? "self-center text-4xl p-1" : ""}`}>Directory</h1>
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
                               id="socialmedia"
                               nav_name="Social Media App"
                               icon={<SiTypescript class="size-4 text-blue-800/75"/>}
                               activeSubLinks={props.activeSubLinks}/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="attendance"
                               nav_name="Attendance App"
                               icon={<><SiTypescript class="size-4 text-blue-800/75"/><FaSolidGraduationCap class="size-4 text-red-600/75" /></>}
                               activeSubLinks={props.activeSubLinks}/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="messaging"
                               nav_name="Simple Messaging"
                               icon={<><AiOutlineJava class="size-4 text-orange-500/75"/> <FaSolidGraduationCap class="size-4 text-red-600/75" /></>}
                               activeSubLinks={props.activeSubLinks}/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="tetris"
                               nav_name="Tetris"
                               icon={<><TbOutlineBrandCSharp class="size-4 text-purple-800/75"/> <FaSolidGraduationCap class="size-4 text-red-600/75" /></>}
                               activeSubLinks={props.activeSubLinks}/>
                <NavSubSection setShowSubSection={props.setShowSubSection}
                               setCurrentSubSection={props.setCurrentSubSection}
                               currentSubSection={props.currentSubSection}
                               showSubSection={props.showSubSection}
                               id="bank_api"
                               nav_name="Bank API"
                               icon={<><TbOutlineBrandCSharp class="size-4 text-purple-800/75"/> <FaSolidGraduationCap class="size-4 text-red-600/75" /></>}
                               activeSubLinks={props.activeSubLinks}/>
            </NavSection>
            <br/>
            <NavSection header="Contact Me"
                        headerClass={`${props.scrollActive ? "text-3xl p-1" : "text-xl"}`}
                        href={`/#contact_me ${props.scrollActive ? "place-items-center text-xl p-1" : ""}`}>
                <NavLink name="Linkedin" target="_blank"
                         href="https://www.linkedin.com/in/harry-martel-062151230/"/>
                <a class="text-md font-medium flex flex-row items-center gap-2" href="mailto:harryjjm@icloud.com"><HiOutlineChevronRight class="size-4" />Email</a>
            </NavSection>
            <Show when={props.watermark}>
                <p class="absolute bottom-4 left-6 opacity-40 italic text-xs">Made by Harry Martel</p>
            </Show>
        </div>
    )
}