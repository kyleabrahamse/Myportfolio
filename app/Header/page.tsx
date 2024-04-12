"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import "../globals.css";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
          <h1 className="text-4xl leading-none tracking-tight font-semibold">
            KyleCodes
          </h1>
          <p className="text-sm text-center tracking-normal font-bold">
            FRONT-END DEVELOPER
          </p>
        </div>
        <nav className="flex">
          <ul className="flex gap-14 text-xl font-bold items-center">
            <li className="hover">ABOUT</li>
            <li className="hover">PROJECTS</li>
            <li className="hover">GET IN TOUCH</li>
            <div className="flex gap-6">
              <div className="icons">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon={faSquareGithub} />
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
