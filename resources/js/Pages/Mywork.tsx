"use client";
import React from "react";
import { Boxes } from "../utils/ui/background-boxes";
import { cn } from "@/utils/cn";
import Layout from "@/utils/layout/Layout";

export function Mywork() {
    return (
        <Layout>
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1
                    className={cn(
                        "md:text-4xl text-xl text-white relative z-20"
                    )}
                >
                    My work page
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    See all my projects.
                </p>
            </div>
            <section>
                <div className=" bg-slate-900 flex flex-col items-center justify-center min-h-[80vh] w-full  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
                        Coming Soon
                    </h1>
                    <p className="text-white text-lg mb-8">
                        We're working hard to bring you something amazing. Stay
                        tuned!
                    </p>
                </div>
            </section>
        </Layout>
    );
}
export default Mywork;
