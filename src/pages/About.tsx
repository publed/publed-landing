import {
  twitter as twitterIcon,
  nftCard,
  blockchainCard,
  aiCard,
  decstorageCard,
  sandro,
  vitor,
  mohamed,
} from "../assets";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="font-notosans w-full bg-blue-7 px-about py-40 sm:py-45 md:py-60"
      >
        <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-header whitespace-nowrap text-typo-white mb-6">
            Our Vision
          </h1>
          <p className="text-typo-white text-sm md:text-base md:max-w-2xl">
            Our vision is to create a decentralized scientific publishing
            platform that fosters open access, transparent peer review, and
            global collaboration. By leveraging technologies like blockchain and
            distributed storage, we aim to democratize access to research,
            incentivize quality contributions, and empower the scientific
            community to drive innovation and knowledge dissemination. Join us
            in revolutionizing scientific publishing for a more inclusive and
            impactful future.
          </p>
        </div>
      </section>

      <section className="w-full bg-white p-about text-typo-dark-grey">
        <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-header whitespace-nowrap mb-6">Why Join Us</h1>
          <div className="flex flex-col gap-10 md:max-w-2xl">
            {joinUsData.map((join) => (
              <JoinUs {...join} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#001225] p-about flex flex-col gap-15 md:gap-20 text-typo-white">
        <h1 className="text-header md:text-center">Technologies We Use</h1>
        <div className="flex flex-col gap-12 items-center">
          {technologiesData.map((technology, index) => (
            <TechnologyCard {...technology} isLeft={index % 2 == 0} />
          ))}
        </div>
      </section>

      <section className="font-notosans w-full bg-white p-about flex flex-col gap-6 md:gap-12 text-typo-black">
        <h1 className="text-header text-center font-medium">Meet Our Team</h1>
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
    title: "1) Scientists",
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
  return (
    <div className="flex flex-col gap-4 text-sm md:text-base">
      <h2 className="font-semibold md:leading-tight">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const technologiesData = [
  {
    imageUrl: blockchainCard,
    title: "Blockchain",
    description:
      "Blockchain is a decentralized, distributed ledger technology that securely records and verifies transactions across multiple computers or nodes in a network. It consists of a chain of blocks, where each block contains a list of transactions. Once a block is added to the chain, it becomes permanent and cannot be altered without consensus from the network participants. This immutability and transparency make blockchain suitable for various applications, including cryptocurrency transactions, supply chain management, voting systems, and more.",
  },
  {
    imageUrl: nftCard,
    title: "Non-Fungible Tokens (NFTs)",
    description:
      "Blockchain is a decentralized, distributed ledger technology that securely records and verifies transactions across multiple computers or nodes in a network. It consists of a chain of blocks, where each block contains a list of transactions. Once a block is added to the chain, it becomes permanent and cannot be altered without consensus from the network participants. This immutability and transparency make blockchain suitable for various applications, including cryptocurrency transactions, supply chain management, voting systems, and more.",
  },
  {
    imageUrl: decstorageCard,
    title: "Decentralized Storage",
    description:
      "Blockchain is a decentralized, distributed ledger technology that securely records and verifies transactions across multiple computers or nodes in a network. It consists of a chain of blocks, where each block contains a list of transactions. Once a block is added to the chain, it becomes permanent and cannot be altered without consensus from the network participants. This immutability and transparency make blockchain suitable for various applications, including cryptocurrency transactions, supply chain management, voting systems, and more.",
  },
  {
    imageUrl: aiCard,
    title: "Artificial Intelligence",
    description:
      "Blockchain is a decentralized, distributed ledger technology that securely records and verifies transactions across multiple computers or nodes in a network. It consists of a chain of blocks, where each block contains a list of transactions. Once a block is added to the chain, it becomes permanent and cannot be altered without consensus from the network participants. This immutability and transparency make blockchain suitable for various applications, including cryptocurrency transactions, supply chain management, voting systems, and more.",
  },
];

const TechnologyCard = ({ imageUrl, title, description, isLeft }: any) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden max-w-4xl bg-top bg-no-repeat ${
        isLeft ? "sm:bg-left" : "sm:bg-right"
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
      }}
    >
      <div
        className={`pb-10 pt-40 xs:pt-60 px-10 sm:py-10 card-bg ${
          isLeft ? "sm:pl-72" : "sm:pr-72 card-bg-flip"
        }`}
      >
        <h2 className="text-[22px] leading-6 mb-4 sm:text-[28px] sm:leading-8 md:text-[32px] md:leading-9 md:mb-6">
          {title}
        </h2>
        <p className="text-xs leading-normal md:text-sm text-justify text-default-40">
          {description}
        </p>
      </div>
    </div>
  );
};

const teamData = [
  {
    image: sandro,
    name: "Sandro Pinto",
    role: "Co-Founder",
    description:
      "Passionate researcher with expertise in AI, exploring the frontiers of knowledge to drive innovation and make a positive impact",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
  {
    image: vitor,
    name: "Vítor Ribeiro",
    role: "Co-Founder",
    description:
      "Passionate researcher with expertise in AI, exploring the frontiers of knowledge to drive innovation and make a positive impact",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
  {
    image: mohamed,
    name: "Mohamed Hassan",
    role: "Co-Founder",
    description:
      "Passionate researcher with expertise in AI, exploring the frontiers of knowledge to drive innovation and make a positive impact",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
];

const TeamCard = (props: any) => {
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
        <a href={twitter}>
          <img
            src={twitterIcon}
            alt="twitter"
            className="w-7 h-7 text-typo-black"
          />
        </a>
        <a href={linkedin}>
          <img
            src={twitterIcon}
            alt="twitter"
            className="w-7 h-7 text-typo-black"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
