import {createResource, JSXElement, Show} from "solid-js";
import {Params, useParams} from "@solidjs/router";
import Query from "../components/Query.tsx";

const fetchProject = async (name: string) => {
    return (await fetch(`http://localhost:4000/projects/${name}`) as Response).json();
}

export default function Projects(): JSXElement {
    const params: Params = useParams();

    const [project] = createResource(params.name, fetchProject);

    return (
        <>
            <section>
                <Show when={project()} fallback={<Query/>}>
                    <div class="flex-col text-center">
                        <p>Here {params.name}</p>
                        <p>{project()["language"]}</p>
                    </div>
                </Show>
            </section>
        </>
    )
}