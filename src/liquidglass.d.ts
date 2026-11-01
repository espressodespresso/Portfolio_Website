import "solid-js";
declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "liquid-glass": {
                children?: import("solid-js").JSX.Element;
                class?: string;
                className?: string;
                style?: import("solid-js").JSX.CSSProperties;
                mode?: "preset" | "custom";
                scale?: number;
                radius?: number;
                border?: number;
                lightness?: number;
                displace?: number;
                alpha?: number;
                blur?: number;
                dispersion?: number;
                saturation?: number;
                aberrationIntensity?: number;
                frost?: number;
                borderColor?: string;
                glassColor?: string;
                background?: string;
                autoTextColor?: boolean;
                textOnDark?: string;
                textOnLight?: string;
                forceTextColor?: boolean;
                quality?: "low" | "standard" | "high" | "extreme";
                autodetectquality?: boolean;
                renderer?: "auto" | "svg" | "webgl";
                backdropVersion?: string | number;
                mobileFallback?: "css-only" | "svg";
                effectMode?: "auto" | "svg" | "blur" | "off";
                "backdrop-selector"?: string;
                "lens-profile"?: string;
                strength?: number;
            };
        }
    }
}