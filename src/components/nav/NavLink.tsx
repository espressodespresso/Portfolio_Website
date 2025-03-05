import {JSXElement} from "solid-js";
import {A} from "@solidjs/router";

interface NavLinkProps {
    target?: string,
    href: string,
    name: string
}

export default function NavLink(props: any): JSXElement {
    return (
        <A class="text-md font-medium" target={props.target} href={props.href}>{props.name}</A>
    )

}