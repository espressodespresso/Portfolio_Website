import {JSX, JSXElement} from "solid-js";
import {A} from "@solidjs/router";
import {HiOutlineChevronRight} from "solid-icons/hi";

interface NavLinkProps {
    target?: string,
    href: string,
    name: string,
    icon?: JSX.Element
}

export default function NavLink(props: NavLinkProps): JSXElement {
    return (
        <A class="text-md font-medium flex flex-row gap-2 items-center" target={props.target} href={props.href}><HiOutlineChevronRight class="size-4" />{props.name} {props.icon}</A>
    )

}