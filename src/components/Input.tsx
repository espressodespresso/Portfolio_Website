import {JSXElement} from "solid-js";

export default function Input(props: any): JSXElement {
    return (
        <div class="ml-1 mr-1">
            <input type={props.type} id={props.id} placeholder={props.placeholder}
                   class={"w-full text-white rounded-lg p-3 inputBackground" + props.context}/>
        </div>
    )
}