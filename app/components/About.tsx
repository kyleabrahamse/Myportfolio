import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      <div className="w-8/12 mx-auto pt-40">
        <h2 className="highlight text-xl font-extrabold pb-3">MY FOCUS</h2>
        <div className="flex gap-10">
          <div className="w-1/2 ">
            <h1 className="text-5xl font-semi-bold pb-8">
              Harnessing the capabilities of{" "}
              <span className="highlight">Next.js</span> to improve runtime
              efficiency and elevate user interaction.
            </h1>
            <div className="flex gap-6 items-center">
              <button className="button p-3 px-7 rounded-full text-2xl font-extrabold">
                VIEW MY WORK
              </button>
              <div className="icons">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon={faSquareGithub} />
              </div>
            </div>
          </div>
          <div className="w-1/2 text-2xl font-bold ">
            <p className="pb-4">
              I&apos;m a front-end developer with a strong command of{" "}
              <span className="highlight">React,</span>{" "}
              <span className="highlight">TypeScript </span>
              and <span className="highlight">NextJS.</span>
            </p>
            <p className="pb-4">
              Recently, I have embarked on a journey into the realm of testing
              with Jest, a popular testing framework for JavaScript
              applications. I aim to ensure the resilience and reliability of
              the codebases I work on, delivering robust solutions that meet the
              highest standards of quality.
            </p>
            <p>
              To see examples of my work please visit my <Link href="https://github.com/kyleabrahamse" target="_blank" className="highlight underline">Github</Link> profile or
              follow my work log on my <Link href="https://www.linkedin.com/in/kyle-abrahamse/" target="_blank" className="highlight underline">LinkedIn.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}