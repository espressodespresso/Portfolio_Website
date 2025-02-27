import {JSXElement} from "solid-js";
import SocialButton from "./SocialButton.js";
import img from "../../assets/icons/test.jpeg";
import github from "../../assets/icons/github.svg";
import x from "../../assets/icons/x.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";

let classList: string = "";

export default function SocialButtonGroup(props: any): JSXElement {
    if(props.inverted) {
        classList = "invert-50 sepia-50 hue-rotate-180"
    }

    return (
        <>
            <SocialButton href="https://github.com/espressodespresso">
                <img class={classList} src={github} width="30em" alt="github logo"/>
            </SocialButton>
            <SocialButton href="https://twitter.com/ThatDuds">
                <img class={classList} src={x} width="30em" alt="twitter logo"/>
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/harry-martel-062151230/">
                <img class={classList} src={linkedin} width="30em" alt="linkedin logo"/>
            </SocialButton>
            <SocialButton href="mailto:harry.martel@hotmail.com">
                <img class={classList} src={mail} width="30em" alt="mail logo"/>
            </SocialButton>
        </>
    )
}