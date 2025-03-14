import {JSX} from "solid-js";
import Navbar from "./Navbar.js";

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main class="overflow-hidden">
                {props.children}
            </main>
        </>
    )
}