import {JSXElement, Show} from "solid-js";
import NavLink from "./NavLink.js";
import NavSubLinks from "./NavSubLinks.js";

export default function NavSubSection(props: any): JSXElement {

    return (
        <div onClick={() => (props.setShowSubSection(true) && props.setCurrentSubSection(props.id))}>
            <NavLink name={props.nav_name} href={`/project/${props.id}`}/>
            <Show when={props.showSubSection() && props.currentSubSection() === props.id}>
                <NavSubLinks id={props.id}/>
            </Show>
        </div>
    )
}