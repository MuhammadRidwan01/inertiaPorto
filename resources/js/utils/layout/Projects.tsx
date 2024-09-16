"use client";

import { Tabs } from "../ui/tabs";

export function Projects() {
  const projectsData = [
    {
      title: "CloudData",
      value: "Html,Php,Mysql,Jqery",
      description: "My first php Crud projects",
      image: "image/Screenshot 2024-09-14 215030.webp",
    },
    {
      title: "XproHotel",
      value: "react,nodejs,mysql",
      description: "XproHotel",
      image: "image/xproHotelMokeups.webp",
    },
    {
      title: "InertiaPorto",
      value: "InertiaPorto",
      description: "InertiaPorto",
      image: "image/screenshot-1724751459412.webp",
    },
    {
      title: "CloudFlare",
      value: "CloudFlare",
      description: "CloudFlare",
      image: "image/image.webp",
    },
  ];

  const tabs = projectsData.map((project) => ({
    title: project.title,
    value: project.value,
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-6 lg:p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
  {/* <!-- Tampilan untuk layar di bawah laptop --> */}
  <div className="lg:hidden">
    <div className="mb-6">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold">{project.description}</p>
    </div>
    <div className="mt-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-xl"
      />
    </div>
  </div>

  {/* <!-- Tampilan untuk layar laptop dan di atasnya --> */}
  <div className="hidden lg:block h-[500px]">
    <p className="text-4xl font-bold mb-6">{project.description}</p>
    <img
      src={project.image}
      alt={project.title}
      className="object-fill object-left-top h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  </div>
</div>
    ),
  }));

  return (
    <div className="h-[100vh] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 pb-20 gap-5">
      <h1 className=" text-5xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Small Projects section
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Projects;
