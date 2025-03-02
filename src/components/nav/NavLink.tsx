import {JSXElement} from "solid-js";

export default function NavLink(props: any): JSXElement {
    return (
        <a class="text-sm font-medium"
           href={props.href}>{props.name}</a>
    )

}