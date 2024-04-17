"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Form submit handler
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const object = {
      ...formData,
      access_key: "b9d189c7-d15a-4cc9-8baf-bb2ea3a62424",
    };
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
      setFormData({
        name: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
    setIsLoading(false);
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact text-white" id="contact">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 mx-auto py-20">
        <div className="lg:w-1/2">
          <p className="highlight font-extrabold text-[22px] pb-5">
            CONTACT ME
          </p>
          <h1 className="text-[76px] leading-none font-semibold pb-10">
            {" "}
            Feel free to drop me a message{" "}
          </h1>
          <p className="text-[22px] font-semibold pb-4">
            <span className="highlight">Mobile</span> +44 7776 112 153
          </p>
          <p className="text-[22px] font-semibold pb-4">
            <span className="highlight">Email</span> kyleabrahamse@outlook.com
          </p>
          <div className="flex pb-24">
            <p className="mr-4 highlight text-[22px] font-semibold my-auto">
              Follow my work
            </p>
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
          <h2 className="text-[40px] pb-10 font-semibold">
            Fill out the form below
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
              <input
                className="inputs text-white text-[25px] font-semibold p-3 rounded-full"
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="inputs text-white text-[25px] font-semibold p-3 rounded-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              className="inputs text-white text-[25px] font-semibold p-3 rounded-full"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Your Message"
              className="inputs text-white text-[25px] font-semibold p-3 rounded-full"
              name="message"
              rows={1}
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={`button mt-4 font-bold text-lg w-28 py-2 rounded-full ${
                isLoading ? "bg-green-600 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
