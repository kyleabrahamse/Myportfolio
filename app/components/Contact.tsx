"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b9d189c7-d15a-4cc9-8baf-bb2ea3a62424");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div className="contact text-white" id="contact">
      <div className="flex w-8/12 mx-auto py-20">
        <div className="w-1/2">
          <p className="highlight font-bold text-xl pb-5">CONTACT ME</p>
          <h1 className="text-6xl font-bold pb-10">
            Feel free to drop me a message
          </h1>
          <p className="text-xl font-bold pb-4">
            <span className="highlight">Mobile</span> +44 7776 112 153
          </p>
          <p className="text-xl font-bold pb-4">
            <span className="highlight">Email</span> kyleabrahamse@outlook.com
          </p>
          <div className="flex pb-24">
            <p className="mr-4 highlight text-xl font-bold my-auto">Follow my work</p>
            <div className="flex gap-3 my-auto">
              <div className="icons">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icons">
                <FontAwesomeIcon icon={faSquareGithub} />
              </div>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/images/ppimage2.jpeg"
              alt="profile"
              width={500}
              height={500}
              className="border-none rounded-full w-16 mr-3"
            />
            <div className="pb-0 my-auto">
              <h1 className="text-4xl leading-none tracking-tight font-semibold">
                KyleCodes
              </h1>
              <p className="text-sm tracking-normal font-bold">
                FRONT-END DEVELOPER
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto ">
          <h2 className="text-3xl pb-10 font-bold">Fill out the form below</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                className="inputs text-white  text-xl p-3 rounded-full"
                type="text"
                name="name"
                placeholder="First Name"
              />
              <input
                className="inputs text-white  text-xl p-3 rounded-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input
              className="inputs text-white  text-xl p-3 rounded-full"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              placeholder="Your Message"
              className="inputs text-white  text-xl p-3 rounded-full"
              name="message"
              rows={1}
            />
            <button
              type="submit"
              className="button mt-4 font-bold text-lg w-28 py-2 rounded-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
