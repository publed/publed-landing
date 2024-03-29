import React, { useState } from "react";
import { commas, professor, researcher, student } from "../assets";

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState("Professors");

  const testimonialsData: any = {
    Professors: (
      <ul className="flex flex-col gap-2 text-dark-blue-60">
        <li>
          <strong>Aggregation:</strong> Bring all your knowledge, regardless of
          its format, onto a unified platform.
        </li>
        <li>
          <strong>Ownership:</strong> Secure proof of ownership for your
          contributions, no matter their size or scope.
        </li>
        <li>
          <strong>Dynamic Profile:</strong> Traditional CVs fall short in
          capturing your professional growth. Create a vibrant dynamic profile
          that directly links to your contributions and easily share it with
          potential employers.
        </li>
        <li>
          <strong>Socialization:</strong> Foster a thriving community around the
          knowledge you create and appreciate!
        </li>
        <li>
          <strong>Monetization:</strong> Turn your contributions into income
          while aiding others in their learning journey.
        </li>
      </ul>
    ),
    Students: (
      <ul className="flex flex-col gap-2 text-dark-blue-60">
        <li>
          <strong>Aggregation:</strong> Centralize all your knowledge,
          regardless of its format, in one convenient platform.
        </li>
        <li>
          <strong>Ownership:</strong> Obtain indisputable proof of ownership for
          your contributions, no matter how modest or substantial they may be.
        </li>
        <li>
          <strong>Dynamic Profile:</strong> Conventional CVs can't capture your
          growth effectively. Build a dynamic profile that seamlessly connects
          to your contributions and share it with prospective employers.
        </li>
        <li>
          <strong>Socialization:</strong> Create and engage in a vibrant
          community centered around the knowledge you generate or appreciate!
        </li>
        <li>
          <strong>Monetization:</strong> Transform your contributions into a
          source of income while aiding others in their learning journey.
        </li>
      </ul>
    ),
    Researchers: (
      <ul className="flex flex-col gap-2 text-dark-blue-60">
        <li>
          <strong>Dynamic Research Objects:</strong> Combine all artifacts of
          your research project etc in a dynamic multi-modal NFT including
          datasets, code, figures, slides, videos,... .
        </li>
        <li>
          <strong>Ownership and Monetization:</strong> Retain copyright
          ownership of your contributions and monetize your intellectual
          property
        </li>
        <li>
          <strong>Community:</strong> Create a community around your work by our
          decentralized social media for science. Anyone can comment on Research
          Objects and interact with authors
        </li>
        <li>
          <strong>Dynamic Profile:</strong> Have your lively dynamic profile
          that directly connects to your contributions and easily share it with
          the world. You can also connect to other profiles to automatically
          follow thier work
        </li>
        <li>
          <strong>Transparency, traceability, and accountability:</strong>{" "}
          Permanent, secure, immutable, and replicable research record. Open
          on-chain reviews. AI-based reviewer assignment. Digital Identity
          blockchain-based verification mechanism.
        </li>
      </ul>
    ),
  };

  const testimonialsImage: any = {
    Professors: professor,
    Students: student,
    Researchers: researcher,
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section
      id="testimonials"
      className={`bg-white flex flex-row justify-center items-center container mx-auto px-2 ss:px-8 py-40`}
    >
      <div className="flex flex-col md:flex-row gap-10 w-full items-center">
        <div className="inline-flex md:flex-col rounded-lg">
          <button
            className={`$bg-default-0 px-5 py-3 border rounded-l-lg md:rounded-t-lg md:rounded-bl-none transition duration-150 ease-in-out hover:bg-regular-blue-60 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-regular-blue-70 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-regular-blue-90 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
              selectedCategory === "Professors"
                ? "bg-regular-blue-60"
                : "bg-default-0"
            }`}
            onClick={() => handleCategoryClick("Professors")}
          >
            Professors
          </button>
          <button
            className={`bg-default-0 px-5 py-3 border-y md:border-x md:border-y-0 transition duration-150 ease-in-out hover:bg-regular-blue-60 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-regular-blue-70 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-regular-blue-90 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
              selectedCategory === "Students" ? "active-category" : ""
            }`}
            onClick={() => handleCategoryClick("Students")}
          >
            Students
          </button>
          <button
            className={`bg-default-0 px-5 py-3 border rounded-r-lg md:rounded-b-lg md:rounded-tr-none transition duration-150 ease-in-out hover:bg-regular-blue-60 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-regular-blue-70 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-regular-blue-90 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
              selectedCategory === "Researchers" ? "active-category" : ""
            }`}
            onClick={() => handleCategoryClick("Researchers")}
          >
            Researchers
          </button>
        </div>

        <div className="bg-default-0 border rounded-lg flex flex-col ss:flex-row gap-12 py-10 px-12 justify-center items-center relative w-full">
          <div className="justify-center items-center ss:flex">
            <img
              src={testimonialsImage[selectedCategory]}
              alt="researcher"
              width="100px"
              height="100px"
            />
          </div>
          <div className="">{testimonialsData[selectedCategory]}</div>
          <img
            src={commas}
            className="absolute top-[-17px] left-7"
            alt="commas"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
