import check from "../assets/icons/checkmark.svg";
import {JSXElement} from "solid-js";

export default function Tech(props: any): JSXElement {
    return (
        <div class="grid tech m-2">
            <img src={check} width="40em" alt="a checkmark"/>
            <div class="flex flex-col p-1">
                <h3 class="p-1 font-bold text-xl text-black">{props.title}</h3>
                <p class="p-1 font-medium text-md text-gray-500">{props.level}</p>
            </div>
        </div>
    )
}