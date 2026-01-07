"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import { handleClick } from "./Header";

import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white" id="about">
      <div className="lg:w-9/12 w-10/12 mx-auto pt-40">
        <h2 className="highlight text-xl font-extrabold pb-3">MY FOCUS</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 ">
            <h1 className="text-[40px] font-semibold pb-8">
              Harnessing the capabilities of{" "}
              <span className="highlight">Next.js</span> to improve runtime
              efficiency and elevate user interaction.
            </h1>
            <div className="flex gap-6 items-center">
              <button className="button lg:py-[18px] py-[10px] px-[20px] lg:px-[30px]  rounded-full lg:text-[22px] font-bold">
              <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
                VIEW MY WORK
              </a>
              </button>
              <div className="icons">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon={faSquareGithub} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-[25px] font-semibold ">
            <p className="pb-4">
              I'm a front-end developer with full-stack proficiency, specialising in modern web development with <span className="highlight">React/Next.js</span> and extensible <span className="highlight">Wordpress</span> solutions. Skilled in <span className="highlight">Javascript</span>, <span className="highlight">Typescript</span> and <span className="highlight">PHP</span>, with applied experience building backend services and APIs using <span className="highlight">Laravel</span>.
            </p>
            <p>
              To see examples of my work please visit my{" "}
              <Link
                href="https://github.com/kyleabrahamse"
                target="_blank"
                className="highlight underline"
              >
                Github
              </Link>{" "}
              profile or follow my work log on my{" "}
              <Link
                href="https://www.linkedin.com/in/kyle-abrahamse/"
                target="_blank"
                className="highlight underline"
              >
                LinkedIn.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
