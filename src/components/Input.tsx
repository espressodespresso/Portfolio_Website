import {JSXElement} from "solid-js";

interface InputProps {
    type: string,
    name: string,
    id: string,
    placeholder: string,
    context: string
}

export default function Input(props: InputProps): JSXElement {
    return (
        <div class="ml-1 mr-1 mt-2 mb-2">
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}
                   class={`w-full text-white rounded-lg p-3 inputBackground ${props.context}`}/>
        </div>
    )
}