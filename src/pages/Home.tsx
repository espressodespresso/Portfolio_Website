import {JSXElement} from "solid-js";
import SocialButton from "../components/buttons/SocialButton.tsx";
import Card, {cardTypes} from "../components/Card.tsx";
import Tech from "../components/Tech.tsx";

import img from "../assets/icons/test.jpeg";
import ts from "../assets/icons/ts.svg";
import rust from "../assets/icons/rust.svg";
import csharp from "../assets/icons/csharp.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";
import x from "../assets/icons/x.svg";
import Input from "../components/Input.js";

export default function Home(): JSXElement {
    return (
        <>
            <section id="about_me">
                <div class="flex-col pt-24 pb-12 text-center">
                    <img
                        class="rounded-full w-52 border-2 border-solid border-slate-600 m-auto hover:scale-110
                         transition-transform"
                        src={img}
                        alt="avatar"/>
                    <br/>
                    <h1 class="inline-block text-3xl font-extrabold md:text-4xl lg:text-4xl">Hi there!</h1>
                    <h2 class="inline-block pl-2 text-2xl font-bold md:text-3xl lg:text3xl">I'm Harry.</h2>
                    <br/>
                    <p>I'm a aspiring graduate Software Engineer pursuing a Master's Degree</p>
                    <br/>
                    <SocialButton href="https://github.com/espressodespresso">
                        <img src={github} width="30em" alt="github logo"/>
                    </SocialButton>
                    <SocialButton href="https://twitter.com/ThatDuds">
                        <img src={x} width="30em" alt="twitter logo"/>
                    </SocialButton>
                    <SocialButton href="https://www.linkedin.com/in/harry-martel-062151230/">
                        <img src={linkedin} width="30em" alt="linkedin logo"/>
                    </SocialButton>
                    <SocialButton href="mailto:harry.martel@hotmail.com">
                        <img src={mail} width="30em" alt="mail logo"/>
                    </SocialButton>
                </div>
            </section>
            <div class="spacer layer1"/>
            <section class="bg-[#93f673]" id="featured">
                <div class="flex-col text-center">
                    <h1 class="text-3xl font-bold">Featured Projects</h1>
                    <p class="text-lg font-light italic accent-slate-800">Check out the Github Links!</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card title="Attendance System"
                              description="Third Year University Project which tracks and takes attendance for universites"
                              type={cardTypes.small}>
                            <img src={ts} width="40em" alt="typescript logo"/>
                        </Card>
                        <Card title="Snake Game"
                              description="Personal Project recreating snake within the Rust Terminal"
                              type={cardTypes.small}>
                            <img src={rust} width="40em" alt="rust logo" class="hover:animate-spin"/>
                        </Card>
                        <Card title="Tetris Game"
                              description="Second Year University Project which recreates Tetris within the C# Terminal"
                              type={cardTypes.small}>
                        <img src={csharp} width="40em" alt="c-sharp logo"/>
                        </Card>
                    </div>
                </div>
            </section>
            <div class="spacer layer2" />
            <section class="bg-[#024b00] pb-10" id="experience">
                <div class="flex-col text-center">
                    <h1 class="text-3xl font-extrabold text-gray-50">Regarding Experience</h1>
                    <p class="text-lg font-light text-gray-200 italic">Generalised over 5+ Years</p>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2">
                        <Card type={cardTypes.large}
                              title="Web-based technologies"
                              disabled_link={true}>
                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 tech-grid">
                                <Tech title="Typescript" level="Advanced"/>
                                <Tech title="Javascript" level="Advanced"/>
                                <Tech title="CSS" level="Intermediate"/>
                                <Tech title="HTML" level="Intermediate"/>
                                <br/>
                            </div>
                        </Card>
                        <Card type={cardTypes.large}
                              title="General Languages"
                              disabled_link={true}>
                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 tech-grid">
                                <Tech title="C#" level="Advanced"/>
                                <Tech title="Java" level="Intermediate"/>
                                <Tech title="C++" level="Basic"/>
                                <Tech title="Rust" level="Basic"/>
                                <br/>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <div class="spacer layer3" />
            <section class="bg-[#092100]" id="contact_me">
                <div class="flex-col text-center">
                    <h1 class="text-3xl font-extrabold text-gray-100">Contact Me!</h1>
                    <p class="text-lg font-light text-gray-200 italic">I'm pretty friendly you know...</p>
                    <div class="grid smigrid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-w-xl mt-1 mb-3">
                        <Input type="text" id="firstname" placeholder="First Name" context=""/>
                        <Input type="text" id="lastname" placeholder="Last Name" context=""/>
                    </div>
                    <Input type="email" id="email" placeholder="Email Address" context=" mb-3"/>
                    <div class="ml-1 mr-1">
                        <textarea id="content"
                                  rows="4"
                                  placeholder="Email Content"
                                  class="w-full text-white rounded-lg p-3 inputBackground mb-3"/>
                    </div>
                    <a href="mailto:harry.martel@hotmail.com" type="button" class="inline-block ease-in-out
                     hover:scale-110 transition-transform border-green-700 bg-green-500 text-gray-600
                     border-solid rounded-xl border-2 font-bold text-sm pl-15 pr-15 pt-4 pb-4">
                        Contact
                    </a>
                    <br/>
                    <br/>
                    <SocialButton href="https://github.com/espressodespresso">
                        <img class="invert-50 sepia-50 hue-rotate-180" src={github} width="30em" alt="github logo"/>
                    </SocialButton>
                    <SocialButton href="https://twitter.com/ThatDuds">
                        <img class="invert-50 sepia-50 hue-rotate-180" src={x} width="30em" alt="twitter logo"/>
                    </SocialButton>
                    <SocialButton href="https://www.linkedin.com/in/harry-martel-062151230/">
                        <img class="invert-50 sepia-50 hue-rotate-180" src={linkedin} width="30em" alt="linkedin logo"/>
                    </SocialButton>
                    <SocialButton href="mailto:harry.martel@hotmail.com">
                        <img class="invert-50 sepia-50 hue-rotate-180" src={mail} width="30em" alt="mail logo"/>
                    </SocialButton>
                    <br/>
                    <br/>
                </div>
            </section>
        </>
    )
}