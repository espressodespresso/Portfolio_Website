import {JSXElement, Match, Switch} from "solid-js";
import attendanceURL from "../../assets/backgrounds/attendance.png";

/*const options = {
    attendance: attendanceURL,
    snake: snakeURL,
    tetris: tetrisURL,
    messaging: messagingURL
}*/

const options = {
    attendance: attendanceURL
}

export default function DynamicBackground(props: any): JSXElement {
    return (
        <Switch>
            <Match when={props.id === "attendance"}>
                <section id="project_name"
                         style={{
                             "background-image": `url(${attendanceURL})`,
                         }}>
                    {props.children}
                </section>
            </Match>
        </Switch>
    )
}