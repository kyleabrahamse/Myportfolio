"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const projects = [
    {
      src: "/images/leopard.png",
      alt: "Pilanesberg Leopard Project",
      title: "Pilanesberg Leopard Project",
      description:
        "A webiste to help track and identify leopards fostering consevation efforts within the Pilanesberg Game Reserve in South Africa.",
      technologies: ["REACT", "NEXT.JS", "TYPESCRIPT", "FIREBASE"],
      link: "https://pilanesberg-leopard-project.vercel.app/",
    },
    {
      src: "/images/marlin.png",
      alt: "Marlin Windows",
      title: "Marlin Windows",
      description:
        "A bespoke WordPress website for a premium UK manufacturer of aluminium heritage and contemporary glazing. Built from the ground up using a custom block-based theme on the Sage Roots starter theme.",
      technologies: ["WORDPRESS", "PHP", "JAVASCRIPT", "TAILWIND CSS"],
      link: "https://marlinwindows.co.uk/",
    },
    {
      src: "/images/crashlaw.png",
      alt: "Crashlaw24",
      title: "Crashlaw24",
      description: "A React and Laravel platform for a legal firm specialising in motoring offences. Built with a React frontend using MUI for styling, a Laravel backend and Payload CMS for content management.",
      technologies: ["REACT", "LARAVEL", "MUI", "PAYLOAD CMS"],
      link: "https://crashlaw24.co.uk/",
    }
  ];

  return (
    <div className="bg-white pb-20" id="projects">
      <h1 className="pt-20 pb-20 text-5xl lg:text-[76px] font-semibold w-9/12 mx-auto">
        My Work
      </h1>
      {projects.map((project, index) => (
        // Projects container
        <div
          key={index}
          className={`flex flex-col lg:flex-row hover-project pb-10 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image div with button */}
          <div className="bg-black lg:w-1/2 rounded-lg relative">
            <div>
              <Link href={project.link} target="_blank">
                <button
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`imageHover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl py-[18px]
                  px-[30px] rounded-full z-10 ${
                    hoveredIndex === index ? "visible" : "hidden"
                  }`}
                >
                  LAUNCH WEBSITE
                </button>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={2000}
                  height={2000}
                  className={`w-full h-96 rounded-lg object-cover transition-opacity duration-400 ease-out
                   ${hoveredIndex === index ? "opacity-50" : "opacity-100"}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
            </div>
          </div>
          {/* Project Info */}
          <div
            className={`lg:w-[36.2%] w-10/12 my-auto ml-10 ${
              index % 2 !== 0 ? "mr-5" : ""
            }`}
          >
            <div className="flex flex-wrap gap-3 pt-10 lg:pb-0">
              {/* List tech */}
              {project.technologies.map((tech, index) => (
                <h3
                  key={index}
                  className="bg-gray-200 font-semibold text-[18px] rounded-full px-3"
                >
                  {tech}
                </h3>
              ))}
            </div>
            {/* Heading */}
            <Link href={project.link} target="_blank">
              <h2
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                className={`h1 text-4xl pt-4 font-semibold pb-4 tracking-wide relative inline-block
                  after:content-[''] after:absolute after:left-0 after:bottom-3 after:h-[3px] after:bg-current
                  after:transition-all after:duration-400 after:ease-out
                  ${hoveredIndex === index ? "highlight after:w-full" : "after:w-0"}`}
              >
                {project.title}
              </h2>
            </Link>
            {/* Description */}
            <p className="text-[25px] font-semibold">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
