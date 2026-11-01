import {JSX} from "solid-js";
import "simple-liquid-glass/web-component";

interface GlassContainerProps {
    classes?: string;
    children: JSX.Element;
}
export default function GlassContainer(props: GlassContainerProps): JSX.Element {
    return (
        <liquid-glass class={props.classes}
                      mode="custom"
                      quality="extreme"
                      renderer="webgl"
                      effectMode="auto"
                      scale={100}
                      radius={20}
                      border={0.1}
                      lightness={65}
                      displace={1.5}
                      alpha={0.45}
                      blur={4}
                      dispersion={12}
                      saturation={110}
                      aberrationIntensity={0.1}
                      frost={0.05}
                      glassColor="rgba(255, 255, 255, 0.08)"
                      borderColor="rgba(255, 255, 255, 0.22)">
            {props.children}
        </liquid-glass>
    )
}