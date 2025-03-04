import {JSXElement} from "solid-js";

export default function Input(props: any): JSXElement {
    return (
        <div class="ml-1 mr-1 mt-2 mb-2">
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}
                   class={"w-full text-white rounded-lg p-3 inputBackground" + props.context}/>
        </div>
    )
}