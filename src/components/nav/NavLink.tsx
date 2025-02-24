import {JSXElement} from "solid-js";

export default function NavLink(props: any): JSXElement {
    return (
        // <h4 className="text-sm font-medium">{props.name}</h4>
        <a class="text-sm font-medium"
           href={props.href}>{props.name}</a>
    )

}