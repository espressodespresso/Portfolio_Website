import {createMemo, JSXElement, Match, Switch} from "solid-js";
import attendanceURL from "../../assets/backgrounds/attendance.avif";
import bank_apiURL from "../../assets/backgrounds/bank_api.avif";
import tetrisURL from "../../assets/backgrounds/tetris.avif";
import messagingURL from "../../assets/backgrounds/messaging.avif";

const options = {
    attendance: attendanceURL,
    bank_api: bank_apiURL,
    tetris: tetrisURL,
    messaging: messagingURL
}

export default function DynamicBackground(props: { id: keyof typeof options, children: JSXElement, class: string}): JSXElement {
    const backgroundImage = createMemo(() => options[props.id] ?? "");

    return (
        <section id="project_name"
                 class={props.class}
                 style={{
                     "background-image": `url(${backgroundImage()})`
                 }}>
            {props.children}
        </section>
    )
}