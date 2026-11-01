import {JSXElement} from "solid-js";
import SocialButton from "./SocialButton.js";
import {SiGithub} from "solid-icons/si";
import {BsLinkedin} from "solid-icons/bs";
import {MdFillEmail} from "solid-icons/md";

let classList: string = "";

interface SocialButtonGroupProps {
    inverted?: boolean
}

export default function SocialButtonGroup(props: SocialButtonGroupProps): JSXElement {
    return (
        <>
            <SocialButton href="https://github.com/espressodespresso">
                <SiGithub class={`size-8 ${props.inverted ? "text-white" : "text-black"}`} />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/harry-martel-062151230/">
                <BsLinkedin class={`size-8 ${props.inverted ? "text-white" : "text-black"}`} />
            </SocialButton>
            <SocialButton href="mailto:harryjjm@icloud.com">
                <MdFillEmail class={`size-8 ${props.inverted ? "text-white" : "text-black"}`} />
            </SocialButton>
        </>
    )
}