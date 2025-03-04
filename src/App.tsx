import {Component, lazy} from 'solid-js';
import 'flowbite';
import {Route, Router} from "@solidjs/router";

const routes = [
    {
        path: "/",
        component: lazy(() => import("./pages/Home.tsx"))
    },
    {
        path: "/project/:name",
        component: lazy(() => import("./pages/Projects.tsx"))
    },
    {
        path: "*",
        component: lazy(() => import("./pages/NotFound.tsx"))
    }
]

const App: Component = () => {
    return (
        <Router>
            {routes}
        </Router>
    );
};

export default App;