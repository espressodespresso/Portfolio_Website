import {JSXElement, Show} from "solid-js";

export const cardTypes = {
    small: "m-5 p-5 max-w-sm card border-2 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700",
    medium: "m-5 p-5 max-w-md card border-2 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700",
    large: "m-5 p-5 max-w-lg card border-2 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
}

interface CardProps {
    type: string,
    title: string,
    description?: string,
    disabled_link?: boolean,
    href?: string,
    children: JSXElement,
}

export default function Card(props: CardProps): JSXElement {
    return (
        <div class={`${props.type} sm:min-w-100 md:min-w-110 lg:min-w-115`}>
            {props.children}
            <h5 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">{props.title}</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
            <Show when={!props.disabled_link}>
                <a href={props.href} class="inline-flex font-medium items-center hover:underline">
                    See the Project
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </Show>
        </div>
    )
}