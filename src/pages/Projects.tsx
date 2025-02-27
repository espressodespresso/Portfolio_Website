import {createResource, JSXElement, Show} from "solid-js";
import {Params, useParams} from "@solidjs/router";
import Query from "../components/Query.tsx";
import attendanceURL from "../assets/backgrounds/attendance.png";
import DynamicBackground from "../components/DynamicBackground.js";
import Card, {cardTypes} from "../components/Card.js";
import Tech from "../components/Tech.js";
import SocialButtonGroup from "../components/buttons/SocialButtonGroup.js";

const fetchProject = async (name: string) => {
    return (await fetch(`http://localhost:4000/projects/${name}`) as Response).json();
}

const options = {
    attendance: attendanceURL
}

const Attendance = () => <section></section>

export default function Projects(): JSXElement {
    const params: Params = useParams();
    const [project] = createResource(params.name, fetchProject);

    return (
        <>
            <Show when={project()} fallback={<Query/>}>
                <div class="flex-col text-center">
                    <DynamicBackground id={project()["id"]}>
                        <div class="absolute inset-0 backdrop-blur-sm"/>
                        <div class="relative z-10 flex flex-col items-center justify-center">
                            <h1 class="text-6xl font-bold">{project()["name"]}</h1>
                            <h3 class="pt-1">{project()["description"]}</h3>
                            <p class="text-sm italic pt-2">↓ Scroll for more information below! ↓</p>
                        </div>
                    </DynamicBackground>
                    <div class="min-h-10 bg-gradient-to-b from-[#820c3d] to-[#b7154c]" />
                    <section class="bg-[#b7154c] text-white flex flex-col" id="tech_stack">
                        <h1 class="text-4xl font-bold">Tech Stack</h1>
                        <h4 class="pt-1 italic">Full-stack Typescript Approach</h4>
                        <br/>
                        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-w-4xl">
                            <Card type={cardTypes.medium}
                                  title="Client-side"
                                  disabled_link={true}>
                                <Tech title="Typescript"/>
                                <Tech title="Node.js" level="via Browserify"/>
                                <Tech title="Minification" level="via uglify.js"></Tech>
                            </Card>
                            <Card type={cardTypes.medium}
                                  title="Server-side"
                                  disabled_link={true}>
                                <Tech title="Typescript"/>
                                <Tech title="Hono" level="A Web Framework"/>
                                <Tech title="Jest" level="A Testing Framework"></Tech>
                            </Card>
                        </div>
                    </section>
                    <section class="bg-[#960f3a] text-white flex flex-col" id="features">
                        <h1 class="text-4xl font-bold">Features</h1>
                    </section>
                    <section class="bg-[#f0ecee]">
                        <h1 class="text-4xl font-bold">Screenshots</h1>
                    </section>
                    <section>
                        <h1 class="text-4xl font-bold">Code</h1>
                    </section>
                    <br/>
                    <SocialButtonGroup/>
                </div>
            </Show>
        </>
    )
}