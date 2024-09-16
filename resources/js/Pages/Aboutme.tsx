"use client";
import Layout from "@/utils/layout/Layout";
import { LampContainer } from "@/utils/ui/lamp";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/utils/ui/background-gradient";
import SertifikatGallery from "@/utils/layout/ImageGallery";
import { TextGenerateEffect } from "@/utils/ui/text-generate-effect";

export function AboutMe() {
  const words1 = `Muhammad Ridwan`;
const words2 = `Hi, I'm Muhammad Ridwan, a passionate software developer with expertise in both front-end and back-end technologies. I love building beautiful, user-friendly web applications that provide great user experiences. My journey in software development has allowed me to work with amazing tools and technologies like React, Node.js, and Laravel.`;
const words3 = `When I'm not coding, I enjoy learning new things and keeping up with the latest industry trends. Let's connect and work together to create something amazing!`;

    return (
        <Layout>
            <div className="bg-[#020617]">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent text-4xl font-medium tracking-tight md:text-7xl md:text-transparent text-white"
                    >
                        About me <br /> Section
                    </motion.h1>
                </LampContainer>
                <section className=" w-screen text-white bg-[#020617] relative md:bottom-[27vh] z-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-[#020617]">
                        {/* Left side: Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <BackgroundGradient className="rounded">
                                <img
                                    src="/image/MUHAMMAD RIDWAN (2).jpg"
                                    alt="About Me"
                                    className="rounded-3xl shadow-2xl max-w-xs md:max-w-sm transform hover:scale-105 transition-transform duration-300"
                                />
                            </BackgroundGradient>
                        </div>

                        {/* Right side: Description */}
                        <div className="w-full mt-5 px-4 md:w-1/2 md:mt-0 md:ml-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                            Muhammad Ridwan
                            </h2>
                            <p className="text-base md:text-lg mb-4 leading-relaxed">
                            <TextGenerateEffect words={words2} />
                            </p>
                            <p className="text-base md:text-lg mb-4 leading-relaxed">
                            <TextGenerateEffect words={words3} />
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <button className="mt-4 md:mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-sm md:text-base">
                                    Let's Connect
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[12rem]">
                        <h1 className=" text-5xl text-center font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Certificates
      </h1>
                    <SertifikatGallery/>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default AboutMe;
