import {A} from "@solidjs/router";

export default function NotFound() {
    return <>
        <section class="h-dvh flex-col text-gray-950">
            <h1 class="font-extrabold text-6xl">Page Not Found :(</h1>
            <h3 class="font-light text-3xl pt-1">Did you enter the wrong url?</h3>
            <br/>
            <A href="/" class="hover:underline items-center inline-flex font-medium italic text-gray-800">
                Take me Home
                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </A>
        </section>
    </>
}