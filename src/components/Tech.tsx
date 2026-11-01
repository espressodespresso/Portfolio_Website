import {JSX, JSXElement} from "solid-js";

interface TechProps {
    title: string,
    level: string,
    icon: JSX.Element;
}

export default function Tech(props: TechProps): JSXElement {
    return (
        <div class="grid tech m-2">
            {props.icon}
            <div class="flex flex-col p-1">
                <h3 class="p-1 font-bold text-xl text-black">{props.title}</h3>
                <p class="p-1 font-medium text-md text-gray-500">{props.level}</p>
            </div>
        </div>
    )
}