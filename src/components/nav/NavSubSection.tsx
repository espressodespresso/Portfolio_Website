import {Accessor, JSXElement, Setter, Show} from "solid-js";
import NavLink from "./NavLink.js";
import NavSubLinks from "./NavSubLinks.js";

interface NavSubSectionProps {
    setShowSubSection: Setter<boolean>,
    setCurrentSubSection: Setter<string>,
    currentSubSection: Accessor<string>,
    showSubSection: Accessor<boolean>,
    id: string,
    nav_name: string,
    activeSubLinks: boolean
}

export default function NavSubSection(props: NavSubSectionProps): JSXElement {
    return (
        <div onClick={() => (props.setShowSubSection(true) && props.setCurrentSubSection(props.id))}>
            <NavLink name={props.nav_name} href={`/project/${props.id}`}/>
            <Show when={props.showSubSection() && props.currentSubSection() === props.id && props.activeSubLinks}>
                <NavSubLinks id={props.id}/>
            </Show>
        </div>
    )
}