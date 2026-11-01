import {JSXElement} from "solid-js";
import Card, {cardTypes} from "../components/cards/Card.tsx";
import Tech from "../components/Tech.tsx";

import img from "../assets/icons/avatar.avif";
import Input from "../components/Input.js";
import SocialButtonGroup from "../components/buttons/SocialButtonGroup.js";
import Layout from "../components/Layout.js";
import FadeIn from "../components/FadeIn.tsx";
import {
    SiCplusplus,
    SiCss, SiDotnet, SiHono,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiReact,
    SiSolid,
    SiTypescript
} from "solid-icons/si";
import {TbOutlineBrandCSharp, TbOutlineBrandSolidjs} from "solid-icons/tb";
import {AiOutlineJava} from "solid-icons/ai";

export default function Home(): JSXElement {
    return (
        <Layout>
            <section id="about_me">
                <FadeIn>
                    <div class="flex-col pt-24 pb-12 text-center">
                        <img
                            class="rounded-full w-52 border-2 border-solid border-slate-600 m-auto hover:scale-110
                             transition-transform"
                            src={img}
                            alt="avatar"/>
                        <br/>
                        <span class="">
                            <h1 class="inline-block text-3xl font-extrabold md:text-4xl lg:text-4xl">Hi there!</h1>
                            <h2 class="inline-block pl-2 text-2xl font-bold md:text-3xl lg:text-3xl">I'm Harry.</h2>
                        </span>
                        <br/>
                        <p>I'm a aspiring graduate Software Engineer pursuing a Master's Degree</p>
                        <br/>
                        <SocialButtonGroup/>
                    </div>
                </FadeIn>
            </section>
            <div class="spacer homeLayer1"/>
            <section class="bg-[#93f673]" id="featured">
                <FadeIn>
                    <div class="flex-col text-center">
                        <h1 class="text-3xl font-bold">Featured Projects</h1>
                        <p class="text-lg font-light italic accent-slate-800 pb-5">Explore a selection of my work and public development projects</p>
                        <div class="grid grid-cols-1 lg:grid-cols-3">
                            <Card title="Attendance System"
                                  description="Third Year University Project which tracks and takes attendance for universites"
                                  type={cardTypes.home_featured}
                                  href="/project/attendance">
                                <SiTypescript class="size-10 text-blue-800"/>
                            </Card>
                            <Card title="Bank API"
                                  description="Built for a group university project replicating a banking system"
                                  type={cardTypes.home_featured}
                                  href="/project/bank_api">
                                <TbOutlineBrandCSharp class="size-10 text-purple-800"/>
                            </Card>
                            <Card title="Tetris Game"
                                  description="Second Year University Project which recreates Tetris within the C# Terminal"
                                  type={cardTypes.home_featured}
                                  href="/project/tetris">
                                <TbOutlineBrandCSharp class="size-10 text-purple-800"/>
                            </Card>
                        </div>
                    </div>
                </FadeIn>
            </section>
            <div class="spacer homeLayer2" />
            <section class="bg-[#024b00] pb-10 min-w-dvw place-items-center" id="experience">
                <FadeIn>
                    <div class="flex-col text-center">
                        <h1 class="text-3xl font-extrabold text-gray-50">Technical Experience</h1>
                        <p class="text-lg font-light text-gray-200 italic pb-5">5+ Years of Practical Experience</p>
                        <div class="grid grid-cols-1 xl:grid-cols-3 ">
                            <Card type={cardTypes.home_experience}
                                  title="Web Development Technologies"
                                  disabled_link={true}
                                  flipped={true}>
                                <div class="grid xl:grid-cols-2 grid-cols-1 pb-10">
                                    <Tech icon={<SiTypescript class="size-10 text-blue-800"/>} title="Typescript" level="Advanced" flipped={true}/>
                                    <Tech icon={<SiJavascript class="size-10 text-yellow-500"/>} title="Javascript" level="Advanced" flipped={true}/>
                                    <Tech icon={<SiCss class="size-10 text-purple-600"/>} title="CSS" level="Advanced" flipped={true}/>
                                    <Tech icon={<SiHtml5 class="size-10 text-orange-600"/>} title="HTML" level="Advanced" flipped={true}/>
                                </div>
                            </Card>
                            <Card type={cardTypes.home_experience}
                                  title="Frameworks & Libraries"
                                  disabled_link={true}
                                  flipped={true}>
                                <div class="grid xl:grid-cols-2 grid-cols-1 pb-10">
                                    <Tech icon={<SiSolid class="size-10 text-blue-800"/>} title="SolidJS" level="Advanced" flipped={true}/>
                                    <Tech icon={<SiReact class="size-10 text-blue-400"/>} title="React" level="Intermediate" flipped={true}/>
                                    <Tech icon={<SiDotnet class="size-10 text-purple-800"/>} title=".NET" level="Intermediate" flipped={true}/>
                                    <Tech icon={<SiHono class="size-10 text-red-600"/>} title="Hono" level="Advanced" flipped={true}/>
                                </div>
                            </Card>
                            <Card type={cardTypes.home_experience}
                                  title="Core Programming Languages"
                                  disabled_link={true}
                                  flipped={true}>
                                <div class="grid xl:grid-cols-2 grid-cols-1 pb-10">
                                    <Tech icon={<TbOutlineBrandCSharp class="size-10 text-purple-800"/>} title="C#" level="Advanced" flipped={true}/>
                                    <Tech icon={<AiOutlineJava class="size-10 text-orange-500"/>} title="Java" level="Intermediate" flipped={true}/>
                                    <Tech icon={<SiCplusplus class="size-10 text-blue-500"/>} title="C++" level="Intermediate" flipped={true}/>
                                    <Tech icon={<SiKotlin class="size-10 text-purple-300"/>} title="Kotlin" level="Intermediate" flipped={true}/>
                                </div>
                            </Card>
                        </div>
                    </div>
                </FadeIn>
            </section>
            <div class="spacer homeLayer3"/>
            <section class="bg-[#092100] min-w-dvw place-items-center" id="contact_me">
                <FadeIn>
                    <div class="flex-col text-center w-full sm:w-dvw md:w-150 lg:w-150 xl:w-150">
                        <h1 class="text-3xl font-extrabold text-gray-100">Let's Connect</h1>
                        <p class="text-lg font-light text-gray-200 italic pb-5">Interested in working together? I'd be delighted to hear from you</p>
                        <form action={import.meta.env.VITE_FORM_ENDPOINT} method="post">
                            <div class="grid sm:grid-cols-1 sm:min-w-md md:grid-cols-1 md:min-w-xl lg:grid-cols-2 lg:min-w-xl mt-1 mb-3">
                                <Input type="text" name="name" id="firstname" placeholder="First Name" context=""/>
                                <Input type="text" name="name" id="lastname" placeholder="Last Name" context=""/>
                            </div>
                            <Input type="email" name="email" id="email" placeholder="Email Address" context=" mb-3"/>
                            <div class="ml-1 mr-1">
                                <textarea id="content"
                                          name="message"
                                          rows="4"
                                          placeholder="Email Content"
                                          class="w-full text-white rounded-lg p-3 inputBackground mb-3"/>
                            </div>
                            <button type="submit" class="inline-block ease-in-out
                         hover:scale-110 transition-transform border-green-700 bg-green-500 text-gray-600
                         border-solid rounded-xl border-2 font-bold text-sm pl-15 pr-15 pt-4 pb-4">
                                Contact
                            </button>
                        </form>
                        <br/>
                        <br/>
                        <SocialButtonGroup inverted={true}/>
                        <br/>
                        <br/>
                    </div>
                </FadeIn>
            </section>
        </Layout>
    )
}