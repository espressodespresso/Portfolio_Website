import {For, JSXElement} from "solid-js";

interface NavSubLinksProps {
    id: string
}

const navLinks = [
    {
        id: "tech_stack",
        text: "↳ Tech Stack"
    },
    {
        id: "features",
        text: "↳ Features"
    },
    {
        id: "screenshots",
        text: "↳ Screenshots"
    },
    {
        id: "github",
        text: "↳ GitHub"
    }
]

export default function NavSubLinks(props: NavSubLinksProps): JSXElement {
    return (
        <div id="NavSubSection" class="flex flex-col">
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#${props.id}`}>
                ↳ Title
            </a>
            <For each={navLinks}>
                {(object) => <a class="text-xs font-medium pl-3" href={`/project/${props.id}#${object.id}`}>
                    {object["text"]}
                </a>}
            </For>
        </div>
    )
}