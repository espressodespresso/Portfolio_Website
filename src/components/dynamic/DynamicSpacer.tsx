import {JSXElement} from "solid-js";

export default function DynamicSpacer(props: any): JSXElement {
    return (
        <div class={`spacer ${props.id}Spacer`}/>
    )
}