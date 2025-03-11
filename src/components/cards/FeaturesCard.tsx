import {JSXElement} from "solid-js";

interface FeaturesCardProps {
    emoji: string,
    title: string,
    description: string
}

export default function FeaturesCard(props: FeaturesCardProps): JSXElement {
    return (
        <div class="flex justify-center p-1">
            <span class="hover:scale-110 transition-transform">{props.emoji}</span>
            <h3 class="text-xl font-bold min-w-31">{props.title}</h3>
            -
            <p class="text-left pl-2 sm:max-w-80">{props.description}</p>
        </div>
    )
}