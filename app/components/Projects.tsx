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
      technologies: ["REACT", "SCSS"],
      link: "https://pilanesberg-leopard-project.netlify.app/",
    },
    {
      src: "/images/holiday.png",
      alt: "A Holiday Keeper",
      title: "A Holiday Keeper",
      description:
        "An app to keep track of holiday destinations a user wants to visit.",
      technologies: ["JAVASCRIPT", "FIREBASE"],
      link: "https://our-holiday-planner.netlify.app/",
    },
    {
      src: "/images/recipe.png",
      alt: "Recipe Planner",
      title: "Recipe Planner",
      description:
        "A recipe planner that generates recipes and a shopping list for the week.",
      technologies: ["JAVASCRIPT", "HTML", "CSS"],
      link: "https://our-recipe-planner.netlify.app/",
    },
  ];

  return (
    <div className="bg-white pb-20" id="projects">
      <h1 className="pt-20 pb-20 text-7xl font-bold w-2/3 mx-auto">My Work</h1>
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
                  className={`imageHover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg px-5 py-2 rounded-full z-10 ${
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
                  className={`w-full h-96 rounded-lg ${
                    index === 1 ? "" : "object-cover"
                  } ${hoveredIndex === index ? "opacity-50" : "opacity-1"}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
            </div>
          </div>
          {/* Project Info */}
          <div
            className={`lg:w-4/12 w-10/12 my-auto ml-10 ${index % 2 !== 0 ? "mr-5" : ""}`}
          >
            <div className="flex gap-3 pt-10 lg:pb-0">
              {/* List tech */}
              {project.technologies.map((tech, index) => (
                <h3
                  key={index}
                  className="bg-gray-200 text-lg rounded-full px-3"
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
                className={`h1 text-4xl pt-4 font-bold pb-4 tracking-wide ${
                  hoveredIndex === index
                    ? "highlight underline underline-offset-4"
                    : ""
                }`}
              >
                {project.title}
              </h2>
            </Link>
            {/* Description */}
            <p className="text-2xl font-semi-bold">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
