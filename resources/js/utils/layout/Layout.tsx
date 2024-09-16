import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FloatingDock } from "@/utils/ui/floating-dock";
import {
    IconArrowUp,
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconX,
    IconMenu,
    IconCircleArrowDown,
} from "@tabler/icons-react";



interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div
            className="min-h-screen dark"
            style={{ scrollSnapType: "x mandatory" }}
        >
            <header className="absolute top-0 left-0 right-0 z-50 pt-3 px-10">
                <nav className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-white flex-col hover:text-gray-300"
                    >
                        <h1 className=" text-xl font-semibold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            M Ridwan
                        </h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
                        >
                            {isMenuOpen ? (
                                <IconX size={24} />
                            ) : (
                                <IconMenu size={24} />
                            )}
                        </button>
                    </div>
                    <div
                        className={`${
                            isMenuOpen ? "flex" : "hidden"
                        } md:flex flex-col md:flex-row absolute md:relative top-11 left-0 right-0 md:top-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 md:bg-transparent md:border-none border-b border-l border-r border-gray-100 md:border-gray-400 p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}
                    >
                        <Link
                            href="/projects"
                            className="px-4 py-2 rounded-full bg-white border-2 border-white text-transparant text-sm font-medium
                             focus:outline-none focus:ring-2 focus:ring-blue-400 
                             hover:scale-110 hover:px-8 
                             transition-all ease-in-out text-center"
                        >
                            <button>MY WORK</button>
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 rounded-full bg-transparent border-2 border-white text-white text-sm font-medium
                             focus:outline-none focus:ring-2 focus:ring-blue-400 
                             hover:scale-110 hover:px-8 
                             transition-all ease-in-out text-center"
                        >
                            <button>ABOUT ME</button>
                        </Link>
                        <Link
                            href="/connect"
                            className="px-4 py-2 rounded-full bg-transparent border-2 border-white text-white text-sm font-medium
                             focus:outline-none focus:ring-2 focus:ring-blue-400 
                             hover:scale-110 hover:px-8 
                             transition-all ease-in-out text-center"
                        >
                            <button>CONNECT</button>
                        </Link>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};
export default Layout;
