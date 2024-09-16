"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/utils/ui/background-gradient-animation";
import { FlipWords } from "@/utils/ui/flip-words";
import { IconX, IconMenu, IconCircleArrowDown } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import { AuroraBackground } from "../ui/aurora-background";

const Hero: React.FC<{ passionate: string[]; skills: string[] }> = ({
    passionate,
    skills,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                >
                    <h1 className="text-center">Muhammad Ridwan</h1>
                    <div className="text-lg md:text-xl lg:text-2xl font-light text-slate-300 leading-relaxed mb-3 text-center">
                        A passionate{" "}
                        <FlipWords
                            words={passionate}
                            className="font-normal text-yellow-200"
                        />
                        , a skilled{" "}
                        <FlipWords
                            words={skills}
                            className="font-normal text-cyan-200"
                        />
                        , and a creative{" "}
                        <FlipWords
                            words={["Innovator"]}
                            className="font-normal text-green-200"
                        />
                        .
                    </div>
                    <div className="text-base md:text-lg lg:text-xl font-light text-slate-200 italic text-center">
                        Crafting digital experiences with{" "}
                        <FlipWords
                            words={skills}
                            className="font-normal text-pink-200"
                        />
                    </div>
                </motion.div>
                
            <IconCircleArrowDown
        href="About"
        color="white"
        className="w-12 h-12 animate-bounce absolute mx-auto bottom-0"
    />
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Hero;
