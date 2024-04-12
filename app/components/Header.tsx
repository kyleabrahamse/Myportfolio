"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import "../globals.css";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent z-10 text-white pt-6 transition-all duration-200 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex content-center w-8/12 mx-auto justify-between items-center sticky">
        <div className="">
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            <h1 className="text-4xl leading-none tracking-tight font-semibold">
              KyleCodes
            </h1>
            <p className="text-sm text-center tracking-normal font-bold">
              FRONT-END DEVELOPER
            </p>
          </a>
        </div>
        <nav className="flex">
          <ul className="flex gap-14 text-xl font-bold items-center">
            <li className="hover">
              <a href="#about" onClick={(e) => handleClick(e, "about")}>
                ABOUT
              </a>
            </li>
            <li className="hover">
              <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
                PROJECTS
              </a>
            </li>
            <li className="hover">
              <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
                GET IN TOUCH
              </a>
            </li>
            <div className="flex gap-6">
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/kyle-abrahamse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div className="icons">
                <a
                  href="https://github.com/kyleabrahamse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
