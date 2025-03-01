import {JSXElement} from "solid-js";

export default function FeaturesCard(props: any): JSXElement {
    return (
        <div class="flex justify-center p-1">
            {props.emoji}
            <h3 class="text-xl font-bold min-w-31">{props.title}</h3>
            -
            <p class="text-left pl-2">{props.description}</p>
        </div>
    )
}