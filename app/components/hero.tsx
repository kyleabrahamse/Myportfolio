import Image from "next/image";
import "../globals.css";

export default function Hero() {
  return (
    <div
      className="hero bg-transparent justify-center flex flex-col text-white "
      id="home"
    >
      <div className="w-10/12 md:w-9/12 mx-auto pt-52">
        <div className="flex items-center gap-3 pb-6">
          <Image
            src="/images/ppimage2.jpeg"
            alt="profile"
            width={500}
            height={500}
            className="border-none rounded-full w-16"
          />
          <h2 className="highlight text-[22px] font-extrabold">HI, I&apos;M KYLE</h2>
        </div>
        <div className="md:w-10/12">
          <h1 className="text-5xl lg:text-[76px] pb-6 font-semibold leading-none">
            I&apos;m a front-end developer with expertise in{" "}
            <span className="highlight">React</span> and{" "}
            <span className="highlight">Typscript.</span>
          </h1>
          <p className="text-[25px] pb-16 font-semibold md:pr-20">
            I specialise in leveraging <span className="highlight">Next.JS</span> to optomise runtime performance
            and enhance user experiences.
          </p>
        </div>
        <ul className="grid grid-cols-2 lg:flex gap-8 font-bold pb-40">
          <li>
            <Image
              src="/images/Javascript.svg"
              alt="tech"
              width={500}
              height={500}
              className="h-autp w-56"
            />
          </li>
          <li>
            <Image
              src="/images/Typescript.svg"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-56"
            />
          </li>
          <li>
            <Image
              src="/images/React.svg"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-28 md:w-36"
            />
          </li>
          <li>
            <Image
              src="/images/Next.JS.svg"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-28 md:w-40"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
