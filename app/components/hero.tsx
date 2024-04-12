import Image from "next/image";
import "../globals.css";

export default function Hero() {
  return (
    <div className="hero bg-transparent justify-center flex flex-col text-white " id="home">
      <div className="w-8/12 mx-auto pt-52">
        <div className="flex items-center gap-3 pb-6">
          <Image
            src="/images/ppimage2.jpeg"
            alt="profile"
            width={500}
            height={500}
            className="border-none rounded-full w-16"
          />
          <h2 className="highlight text-2xl font-bold">HI, I&apos;M KYLE</h2>
        </div>
        <div className="w-7/12">
          <h1 className="text-6xl pb-6 font-bold">
            I&apos;m a front-end developer with expertise in{" "}
            <span className="highlight">React</span> and{" "}
            <span className="highlight">Typscript.</span>
          </h1>
          <p className="text-2xl pb-16 font-semibold pr-20">
            I specialise in leveraging Next.JS to optomise runtime performance
            and enhance user experiences.
          </p>
        </div>
        <ul className="flex gap-8 font-bold pb-40">
          <li>
            <Image
              src="/images/Javascript.png"
              alt="tech"
              width={500}
              height={500}
              className="h-autp w-56"
            />
          </li>
          <li>
            <Image
              src="/images/Typescript.png"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-56"
            />
          </li>
          <li>
            <Image
              src="/images/React.png"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-36"
            />
          </li>
          <li>
            <Image
              src="/images/Next.png"
              alt="tech"
              width={500}
              height={500}
              className="h-auto w-40"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
