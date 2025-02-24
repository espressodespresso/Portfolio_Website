import type {Component, JSXElement} from 'solid-js';
import 'flowbite';
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import {Route, Router} from "@solidjs/router";
import Projects from "./pages/Projects.tsx";
import NotFound from "./pages/NotFound.tsx";

const App: Component = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/project/:name" component={Projects}></Route>
                    <Route path="*404" component={NotFound}></Route>
                </Router>
            </main>
        </>
    );
};

export default App;