import {JSXElement} from "solid-js";

export default function NavSubLinks(props: any): JSXElement {
    return (
        <div id="NavSubSection" class="flex flex-col">
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#${props.id}`}>
                ↳ Title
            </a>
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#tech_stack`}>
                ↳ Tech Stack
            </a>
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#features`}>
                ↳ Features
            </a>
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#screenshots`}>
                ↳ Screenshots
            </a>
            <a class="text-xs font-medium pl-3" href={`/project/${props.id}#github`}>
                ↳ Github
            </a>
        </div>
    )
}