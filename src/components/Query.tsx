import {JSXElement} from "solid-js";

export default function Query(): JSXElement {
    return (
        <div class="fixed w-full h-full left-0 top-0 grid place-items-center">
            <div class="absolute inset-0 backdrop-blur-lg"/>
            <span class="loader absolute"></span>
        </div>
    )
}