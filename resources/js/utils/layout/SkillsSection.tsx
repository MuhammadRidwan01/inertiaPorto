import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { CardSpotlight } from "@/utils/ui/card-spotlight";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/utils/ui/canvas-reveal-effect";
import {
    IconDatabase,
    IconBrandReact,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandBootstrap,
    IconBrandNodejs,
    IconBrandPhp,
    IconBrandLaravel,
    IconBrandMysql,
    IconCode,
    IconBrandTailwind,
    IconBrandVue,
    IconBrandSass,
    IconBrandTypescript,
    IconBrandNextjs,
    IconBrandWebflow,
    IconBrandPython,
    IconBrandGolang,
    IconServer,
    IconBrandUbuntu,
    IconBrandCloudflare,
    IconBrandNextcloud,
} from "@tabler/icons-react";
import { GlareCard } from "../ui/glare-card";
const SkillsSection: React.FC = () => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <section className="py-16 min-h-screen">
            <div className="max-w-6xl mx-auto px-8">
                {/* Teks tetap di tempat awal */}
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    Tools & Technologies I've Worked With
                </h2>
            </div>

            {/* Kotak berada di tengah layar */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8">
                {/* Frontend Skills Card */}
                <CardContainer className="inter-var w-full bg-[#591c8747]">
                    <CardBody className="bg-[#591c8747] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white flex items-center"
                        >
                            <IconBrandReact
                                className="mr-3 text-sky-500"
                                size={32}
                            />
                            Frontend Skills
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Hover over this card to see the 3D effect and
                            explore frontend technologies
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <IconBrandHtml5
                                        className="mr-3 text-orange-600"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        HTML
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <IconBrandCss3
                                        className="mr-3 text-blue-600"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        CSS
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <IconBrandJavascript
                                        className="mr-3 text-yellow-500"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        JavaScript
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <IconCode
                                        className="mr-3 text-blue-600"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        Htmx
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <IconBrandReact
                                        className="mr-3 text-sky-500"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        React
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <IconBrandBootstrap
                                        className="mr-3 text-purple-600"
                                        size={24}
                                    />
                                    <span className="text-neutral-600 dark:text-white">
                                        Bootstrap
                                    </span>
                                </li>
                            </ul>
                        </CardItem>
                    </CardBody>
                </CardContainer>

                {/* Backend Skills Card */}
                <CardSpotlight className="glass-effect bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-10 transition duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1">
                <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center text-white md:text-3xl">
                        <IconBrandLaravel
                            className="mr-3 text-red-600"
                            size={32}
                        />{" "}
                        Back-end
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <ul className="space-y-5 text-white text-lg">
                            <li className="flex items-center">
                                <IconBrandPhp
                                    className="mr-3 text-indigo-500"
                                    size={24}
                                />{" "}
                                PHP
                            </li>
                            <li className="flex items-center">
                                <IconBrandMysql
                                    className="mr-3 text-yellow-700"
                                    size={24}
                                />{" "}
                                MySQL
                            </li>
                            <li className="flex items-center">
                                <IconBrandLaravel
                                    className="mr-3 text-red-600"
                                    size={24}
                                />{" "}
                                Laravel
                            </li>
                            <li className="flex items-center">
                                <IconServer
                                    className="mr-3 text-red-400"
                                    size={24}
                                />{" "}
                                Apache 2
                            </li>
                            <li className="flex items-center">
                                <IconBrandUbuntu
                                    className="mr-3 text-orange-500"
                                    size={24}
                                />{" "}
                                Ubuntu Server
                            </li>
                            <li className="flex items-center">
                                <IconBrandNextcloud
                                    className="mr-3 text-cyan-500"
                                    size={24}
                                />{" "}
                                Nextcloud
                            </li>
                        </ul>
                        <ul className="space-y-5 text-white text-lg">
                            <li className="flex items-center">
                                <IconBrandCloudflare
                                    className="mr-3 text-orange-300"
                                    size={24}
                                />{" "}
                                Cloudflare ZeroTrust
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://midtrans.com/assets/img/logo.svg?v=1724048091"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                </CardSpotlight>
              </div>
        </section>
    );
};

export default SkillsSection;
