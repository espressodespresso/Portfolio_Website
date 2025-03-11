import {JSXElement} from "solid-js";

interface NavSectionProps {
    header: string,
    headerClass: string,
    children: JSXElement,
    href?: string
}

export default function NavSection(props: NavSectionProps): JSXElement {
    return (
        <div class={`grid grid-cols-1 ${props.href}`}>
            <a href={props.href} class={`${props.headerClass} font-thin`}>{props.header}</a>
            {props.children}
        </div>
    )
}