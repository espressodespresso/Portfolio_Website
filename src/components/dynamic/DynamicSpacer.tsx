import {JSXElement} from "solid-js";

interface DynamicSpacerProps {
    id: string;
}

export default function DynamicSpacer(props: DynamicSpacerProps): JSXElement {
    return (
        <div class={`spacer ${props.id}Spacer`}/>
    )
}