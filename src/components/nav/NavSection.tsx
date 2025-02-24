import {JSXElement} from "solid-js";

export default function NavSection(props: any): JSXElement {
    return (
        <div class="grid grid-cols-1">
            <h2 class="text-lg font-thin">{props.header}</h2>
            {props.children}
        </div>
    )
}