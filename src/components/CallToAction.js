import {Container} from "@mui/material";


import av1 from "../images/avatars/avatar.webp";
import av2 from "../images/avatars/avatar-1.webp";
import av3 from "../images/avatars/avatar-2.webp";
import av4 from "../images/avatars/avatar-3.webp";
import av5 from "../images/avatars/avatar-4.webp";


const CallToAction = () => {
    return (
        <div class="relative py-16">
            <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 ">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 "></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
            </div>
            <Container>
                <div class="relative">
                    <div class="flex items-center justify-center -space-x-2">
                        <img
                            loading="lazy"
                            width="400"
                            height="400"
                            src={av1}
                            alt="member photo"
                            class="h-8 w-8 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src={av2}
                            alt="member photo"
                            class="h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src={av3}
                            alt="member photo"
                            class="z-10 h-16 w-16 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src={av4}
                            alt="member photo"
                            class="relative h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src={av5}
                            alt="member photo"
                            class="h-8 w-8 rounded-full object-cover"
                        />
                    </div>
                    <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                        <h1 class="text-center text-4xl font-bold text-gray-800 md:text-5xl">Get Started now</h1>
                        <p class="text-center text-xl text-gray-600 ">
                            Be part of millions people around the world using crafty to educate yourself.
                        </p>
                        <div class="flex flex-wrap justify-center gap-6">

                            <a href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-primary text-white">More about</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CallToAction;