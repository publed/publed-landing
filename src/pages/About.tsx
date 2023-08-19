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
} from "../assets";

import "../index.css";

const About = () => {
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
            We aim to democratize scientific publishing by creating a
            decentralized ecosystem that fosters open access, transparent peer
            review, and global collaboration. By leveraging Web3 technologies
            like blockchain, NFTs, and distributed storage, we facilitate access
            to research, incentivize quality contributions, and empower the
            scientific community to drive innovation and knowledge
            dissemination.
          </p>
        </div>
      </section>

      <section
        id="tech"
        className="w-full bg-[#001225] p-about flex flex-col gap-15 md:gap-20 text-typo-white"
      >
        <h1 className="text-header text-center font-semibold">
          Democratizing Scientific Publishing
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
      "At the backbone of Publed lies a disruptive technology known as a Blockchain - a decentralized and distributed ledger that securely operates across an interconnected network of nodes. Publed harnesses the potential of Blockchain to reshape the landscape of scientific publishing by introducing unforeseen transparency and decentralization to the publishing process. By embracing this integration of Web3 technologies, Publed is contributing to a new era of scholarly publishing and communication.",
  },
  {
    imageUrl: nftCard,
    title1: "Ownership in Science",
    icon: surprise,
    description:
      "Publed ensures that authors retain ownership of their work. In Publed, we encapsulate and recognize the various research artifacts beyond the typical paper. Through this approach, authors can effectively keep their scientific efforts organized while upholding the copyright of their research object. This “Research Object” encompasses a combination of research artifacts that can include not just papers but also datasets, tools, presentations, demos, and more. By including these elements, we promote comprehensive knowledge sharing and enhance the potential for science replication. ",
  },
  {
    imageUrl: decstorageCard,
    title1: "Immutable and Always-Available Research",
    icon: storage,
    description:
      "The importance of data storage within the realm of research can't be overstated. Determining where and how to store data, as well as for how long, constitutes essential variables for research data storage. Publed relies on decentralized protocols for storage to ensure permanent availability and accessibility. By distributing the storage of scientific works across a network of multiple nodes, we prevent data loss and ensure research data integrity.",
  },
  {
    imageUrl: aiCard,
    title1: "Publed",
    title2: "AI",
    icon: ai,
    description:
      "Just as Publed embraced Web3 for scientific publishing, integrating Artificial Intelligence (AI) with Web3 offers a dynamic alliance. By harnessing AI's data-driven insights, Web3 gains a competitive edge in problem-solving, resource optimization, and network efficiency. In scientific publishing, matching reviewers with papers is a persistent challenge. Publed's AI-driven matching pairs \"Research Objects\" with suitable reviewers, analyzing their expertise and history. This innovation streamlines reviews, expediting evaluations while upholding quality. As AI and scientific publishing converge, Publed pioneers a future of precision, efficiency, and meaningful progress.",
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
      "15+ years in R&D of software and hardware solutions. Leading a research lab with 35+ papers in top venues and several awards. In Worked in key industry players including Intel and Qualcomm.",
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
    role: "AI & Developer",
    description:
      "Enthusiastic PhD student and dedicated researcher with a background in AI, blending his fervor with the Blockchain space",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
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
