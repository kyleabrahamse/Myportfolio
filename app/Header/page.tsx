import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import "../globals.css";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-10 text-white pt-6">
      <div className="flex content-center w-8/12 mx-auto justify-between items-center sticky">
        <div className="">
          <h1 className="text-5xl leading-none tracking-tight font-semibold">
            KyleCodes
          </h1>
          <p className="text-xl text-center tracking-tighter font-bold">
            FRONT-END DEVELOPER
          </p>
        </div>
        <nav className="flex">
          <ul className="flex gap-14 text-2xl font-bold items-center">
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
