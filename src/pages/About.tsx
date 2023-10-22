import { useState } from "react";
import {
  twitter,
  LinkedinLogo,
  nftCard,
  blockchainCard,
  aiCard,
  decstorageCard,
  sandro,
  vitor,
  mohamed,
  TwitterLogo,
  derek,
  diogo,
  ali,
  handshake,
  surprise,
  storage,
  ai,
  open,
  close,
} from "../assets";

import "../index.css";

const About = () => {
  const [selectedFAQ1, setSelectedFAQ1] = useState<boolean>();
  const [selectedFAQ2, setSelectedFAQ2] = useState<boolean>();
  const [selectedFAQ3, setSelectedFAQ3] = useState<boolean>();

  return (
    <>
      <section
        id="vision"
        className="font-notosans w-full bg-blue-20 px-about py-40 sm:py-45 md:py-60"
      >
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-header whitespace-nowrap text-typo-dark-blue mb-6 font-semibold">
            Our Vision
          </h1>
          <p className="text-typo-dark-blue text-sm md:text-base md:max-w-2xl">
            We aim to build a knowledge-centric social media platform that
            facilitates <strong>knowledge</strong> creation, aggregation,
            sharing, and monetization using the decentralized capabilities of
            Web3 technologies.
          </p>
        </div>
      </section>

      <section
        id="tech"
        className="w-full bg-[#001225] p-about flex flex-col gap-15 md:gap-20 text-typo-white"
      >
        <h1 className="text-header text-center font-semibold">
          Empowering Knowledge and Connections
        </h1>
        <div className="flex flex-col gap-12 items-center">
          {technologiesData.map((technology, index) => (
            <TechnologyCard {...technology} isLeft={index % 2 == 0} />
          ))}
        </div>
      </section>

      <section
        id="team"
        className="font-notosans w-full bg-white p-about flex flex-col gap-6 md:gap-12 text-typo-black"
      >
        <h1 className="text-header text-center font-medium">Meet Our Team</h1>
        <div className="flex flex-col gap-10 items-center sm:flex-row sm:flex-wrap sm:justify-center md:gap-x-20">
          {cofoundersData.map((team) => (
            <CoFoundersCard {...team} />
          ))}
        </div>
        <br />
        <div className="flex flex-col gap-10 items-center sm:flex-row sm:flex-wrap sm:justify-center md:gap-x-20">
          {teamData.map((team) => (
            <TeamCard {...team} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center px-30 py-20 gap-20 ">
          <h1 className="text-4xl font-medium leading-10 text-typo-dark-blue flex my-auto mt-0 ml-0 w-1/3">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col gap-8 w-2/3">
            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-row gap-10">
                <p className="text-default-80 text-2xl font-semibold">
                  What is a Knowledge Object?
                </p>
                <button
                  onClick={() => setSelectedFAQ1(!selectedFAQ1)}
                  className=""
                >
                  <img
                    src={selectedFAQ1 ? close : open}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain "
                  />
                </button>
              </div>
              {selectedFAQ1 && (
                <p className="text-[16px] font-normal text-default-80 text-justify max-w-2xl">
                  A Knowledge Object is a unique and digital on-chain
                  representation of a set of artifacts resulting from research
                  work or any type of knowledge creation. In the case of
                  scientific research, this can include a research paper, as
                  well as datasets, videos, presentations, statistics, and other
                  related materials. All these elements are consolidated into a
                  Non-Fungible Token (NFT) and published on-chain, preserving
                  the author's ownership.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-row gap-10">
                <p className="text-default-80 text-2xl font-semibold">
                  What types of content can I publish on Publed?
                </p>
                <button onClick={() => setSelectedFAQ2(!selectedFAQ2)}>
                  <img
                    src={selectedFAQ2 ? close : open}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain "
                  />
                </button>
              </div>
              {selectedFAQ2 && (
                <p className="text-[16px] font-normal text-default-80 text-justify max-w-2xl">
                  As outlined within the Knowledge Object, a diverse range of
                  formats is supported, granting authors the flexibility to
                  choose. Researchers can publish research artifacts, whether or
                  not they undergo peer-review. Educators and students can share
                  various forms of knowledge production, including university
                  papers, class presentations, mini courses, tutorials, and
                  more.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-row gap-10">
                <p className="text-default-80 text-2xl font-semibold">
                  How do I get started with Publed?
                </p>
                <button onClick={() => setSelectedFAQ3(!selectedFAQ3)}>
                  <img
                    src={selectedFAQ3 ? close : open}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain "
                  />
                </button>
              </div>
              {selectedFAQ3 && (
                <p className="text-[16px] font-normal text-default-80 text-justify max-w-2xl">
                  Simply log in with your preferred social login, use a
                  passwordless email, or connect via a Web3 wallet. Customize
                  your profile as a Researcher, Professor, Student, or any role
                  that suits you, and start sharing your knowledge!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const joinUsData = [
  {
    title: "1) Researchers",
    content:
      "Our vision is to create a decentralized scientific publishing platform that fosters open access, transparent peer review, and global collaboration. By leveraging technologies like blockchain and distributed storage, we aim to democratize access to research, incentivize quality contributions, and empower the scientific community to drive innovation and knowledge dissemination.",
  },
  {
    title: "2) Students",
    content:
      "Our vision is to create a decentralized scientific publishing platform that fosters open access, transparent peer review, and global collaboration. By leveraging technologies like blockchain and distributed storage, we aim to democratize access to research, incentivize quality contributions, and empower the scientific community to drive innovation and knowledge dissemination.",
  },
  {
    title: "3) Community",
    content:
      "Our vision is to create a decentralized scientific publishing platform that fosters open access, transparent peer review, and global collaboration. By leveraging technologies like blockchain and distributed storage, we aim to democratize access to research, incentivize quality contributions, and empower the scientific community to drive innovation and knowledge dissemination.",
  },
];

const JoinUs = ({ title, content }: any) => {
  // return (
  //   // <div className="flex flex-col gap-4 text-sm md:text-base">
  //   //   <h2 className="font-semibold md:leading-tight">{title}</h2>
  //   //   <p>{content}</p>
  //   // </div>
  // );
};

const technologiesData = [
  {
    imageUrl: blockchainCard,
    title1: "Publed",
    title2: "Web3",
    icon: handshake,
    description:
      "At the backbone of Publed lies a disruptive technology known as a Blockchain - a decentralized and distributed ledger that securely operates across an interconnected network of nodes. Publed harnesses the potential of Blockchain to reshape knowledge production and collaboration by introducing unforeseen transparency and decentralization to the process. By embracing this integration of Web3 technologies, Publed is contributing to a new era of knowledge sharing.",
  },
  {
    imageUrl: nftCard,
    title1: "Ownership of Knowledge",
    icon: surprise,
    description:
      "Publed guarantees knowledge creators maintain ownership of their contributions. We encapsulate and acknowledge diverse knowledge artifacts, extending beyond conventional and obsolete formats. This 'Knowledge Object' encompasses various elements like datasets, tools, presentations, demos, and more, preserving copyright and promoting comprehensive knowledge sharing, thereby fostering replication.",
  },
  {
    imageUrl: decstorageCard,
    title1: "Immutable and Always-Available Knowledge",
    icon: storage,
    description:
      "The significance of data storage in the realm of knowledge, whether it encompasses research findings or academic work can't be overstated. Determining where and how to store data, as well as for how long, constitutes essential variables for knowledge data storage. Publed relies on decentralized protocols for storage to ensure permanent availability and accessibility. By distributing knowledge data across a network of nodes, we safeguard against data loss and uphold the integrity of knowledge data.",
  },
  {
    imageUrl: aiCard,
    title1: "Publed",
    title2: "AI",
    icon: ai,
    description:
      "Just as Publed adopted Web3 for scientific publishing, the fusion of Artificial Intelligence (AI) with Web3 forms a powerful synergy. In the context of scientific publishing, the challenge of matching reviewers with papers persists. Publed's AI-driven system pairs 'Knowledge Objects' with qualified reviewers, analyzing their expertise and history. This innovation streamlines reviews, accelerating evaluations without compromising quality. With AI and scientific publishing merging, Publed leads the way toward a future marked by precision, efficiency, and meaningful progress.",
  },
];

const TechnologyCard = ({
  imageUrl,
  title1,
  title2,
  icon,
  description,
  isLeft,
}: any) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden max-w-5xl bg-top bg-no-repeat ${
        isLeft ? "sm:bg-left" : "sm:bg-right"
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
      }}
    >
      <div
        className={`pb-10 pt-40 xs:pt-60 px-10 sm:py-10 card-bg ${
          isLeft ? "sm:pl-[340px]" : "sm:pr-[350px] card-bg-flip"
        }`}
      >
        <h2 className="text-[22px] leading-6 mb-4 sm:text-[28px] sm:leading-8 md:text-[30px] md:leading-9 md:mb-6 flex flex-row items-center justify-center sm:justify-normal">
          {title1}{" "}
          <span role="img" aria-label="Web3 Icon">
            <img src={icon} alt="icon" width={35} className="ml-2 mr-2"></img>
          </span>
          {title2}{" "}
        </h2>

        <p className="text-xs leading-normal md:text-sm text-justify text-default-40">
          {description}
        </p>
      </div>
    </div>
  );
};

const cofoundersData = [
  {
    image: sandro,
    name: "Sandro Pinto, PhD",
    role: "Co-Founder & Management",
    description:
      "Forward-thinking leader with 10+ years of experience managing and leading research groups and startups. Prolific writer with 100+ scientific publications. Web3 advisor and consultant.",
    twitter: "https://twitter.com/sandro2pinto",
    linkedin: "https://www.linkedin.com/in/sandro2pinto/",
  },
  {
    image: vitor,
    name: "Vítor Ribeiro",
    role: "Co-Founder & Tech",
    description:
      "Web3 Full Stack Developer with 3 years of experience leading R&D projects and specializing in Web3 solutions. Web3 Hackathon Hunter",
    twitter: "https://twitter.com/vitorhsr99",
    linkedin: "https://www.linkedin.com/in/vitor-ribeiro99/",
  },
  {
    image: mohamed,
    name: "Mohamed Hassan, PhD",
    role: "Co-Founder & Business",
    description:
      "15+ years in R&D of software and hardware solutions. Leading a research lab with 35+ papers in top venues and several awards. Worked in key industry players including Intel and Qualcomm.",
    twitter: "https://twitter.com/ProfMoHassan",
    linkedin: "https://www.linkedin.com/in/profmohassan/",
  },
];

const teamData = [
  {
    image: diogo,
    name: "Diogo Costa",
    role: "AI & Research",
    description:
      "Comitted researcher and PhD student with expertise in computer science and AI, driven by a passion for advancing technology's frontiers.",
    twitter: "https://twitter.com/diogo_21_costa",
    linkedin: "https://www.linkedin.com/in/diogo-costa-66b190189/",
  },
  {
    image: derek,
    name: "Derek Furtado",
    role: "Developer",
    description:
      "Dedicated graduate student and researcher with expertise in Computer Engineering, wielding skills in Web design.",
    twitter: "twitter.com",
    linkedin: "https://www.linkedin.com/in/dffo/",
  },
  {
    image: ali,
    name: "Ali Hussein",
    role: "AI & Research",
    description:
      "Enthusiastic PhD student and research assistant. Solid background in Deep Learning and Computer Vision, blending his fervor with the Blockchain space.",
    twitter: "twitter.com",
    linkedin: "https://www.linkedin.com/in/aliabdellatifhussein/",
  },
];

const CoFoundersCard = (props: any) => {
  const { image, name, role, description, twitter, linkedin } = props;
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="mb-7 h-50 w-52 sm:w-72 sm:h-72" />
      <h2 className="text-[22px] leading-6 mb-2 sm:text-[28px] sm:leading-8 sm:mb-3 md:text-[32px] md:leading-9">
        {name}
      </h2>
      <p className="text-default-80 text-sm mb-3 sm:mb-5 md:text-base">
        {role}
      </p>
      <p className="text-center text-xs leading-normal mb-[10px] w-[300px] sm:mb-4 md:text-sm">
        {description}
      </p>
      <div className="flex gap-5 justify-center">
        <a target="_blank" href={twitter}>
          <TwitterLogo fill="#131317" />
        </a>
        <a target="_blank" href={linkedin}>
          <LinkedinLogo fill="#131317" />
        </a>
      </div>
    </div>
  );
};
const TeamCard = (props: any) => {
  const { image, name, role, description, twitter, linkedin } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={image}
        alt={name}
        className="mb-7 h-50 w-52 sm:w-[273px] sm:h-[273px]"
      />
      <h2 className="text-[22px] leading-6 mb-2 sm:text-[26px] sm:leading-8 sm:mb-3 md:text-[28px] md:leading-9">
        {name}
      </h2>
      <p className="text-default-80 text-sm mb-3 sm:mb-5 md:text-base">
        {role}
      </p>
      <p className="text-center text-xs leading-normal mb-[10px] w-[300px] sm:mb-4 md:text-sm">
        {description}
      </p>
      <div className="flex gap-5 justify-center">
        <a target="_blank" href={twitter}>
          <TwitterLogo fill="#131317" />
        </a>
        <a target="_blank" href={linkedin}>
          <LinkedinLogo fill="#131317" />
        </a>
      </div>
    </div>
  );
};

export default About;
