import {JSXElement} from "solid-js";
import {A} from "@solidjs/router";

export default function NavLink(props: any): JSXElement {
    return (
        <A class="text-sm font-medium" target={props.target} href={props.href}>{props.name}</A>
    )

}