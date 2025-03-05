import {JSXElement} from "solid-js";

interface SocialButtonProps {
    href: string,
    children: JSXElement
}

export default function SocialButton(props: SocialButtonProps): JSXElement {
    return (
        <a href={props.href}
           target="_blank"
           type="button"
           class="inline-block transition ease-in-out delay-75 hover:-translate-y-2
        hover:scale-100 duration-300">
            <div class="me-2">
                {props.children}
            </div>
        </a>
    )
}