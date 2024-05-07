import React from 'react';
import LogoBgPubled from '../icons/Logo-bg-publed';
import LogoBgPubledBottom from '../icons/Logo-bg-publed-bottom';
import Card from '../components/Card';
import Image from 'next/image';

import Feature_1_2 from '../icons/Features_1.2.png';
import Feature_1_1 from '../icons/Features_1.1.png';
import Feature_2 from '../icons/Features_2.png';
import Feature_3 from '../icons/Features_3.png';
import Feature_4_1 from '../icons/Features_4.1.png';
import Feature_4_2 from '../icons/Features_4.2.png';
import Coin from '../icons/Coin';
import SafeLock from '../icons/Safe_Lock';
import Certificate from '../icons/Certificate';
import Discussion from '../icons/Discussion';
import HomeStorage from '../icons/HomeStorage';
import SearchIcon from '../icons/Search';

const KnowledgePage = () => {
  const features = [
    {
      icon: <Certificate />,
      title: 'Guaranteed Ownership',
      description: 'Publed ensures creators\' ownership rights by leveraging NFTs. Each Knowledge Objects is minted as a unique NFT, providing indisputable proof of ownership and authenticity.'

    },
    {
      icon: <Discussion />,
      title: 'Open Discussion',
      description:
        "Publed promotes an open discussion environment where you can participate in meaningful discussions around Knowledge. This encourages collaboration, feedback and the exchange of ideas."
    },
    {
      icon: <SearchIcon />,
      title: 'Transparency',
      description:
        "Publed harnesses the inherent transparency of blockchain technology, providing users with a transparent and auditable record of all interactions and changes to published content."
    },
    {
      icon: <SafeLock />,
      title: 'Immutability',
      description:
        "Publed guarantees the authenticity and originality of the content remains intact over time, giving users confidence in the integrity of the platform."
    },
    {
      icon: <HomeStorage />,
      title: 'Decentralized Storage',
      description:
        "Publed leverages decentralized storage technology, distributing content across multiple nodes instead of relying on a single centralized server. "
    },
    {
      icon: <Coin />,
      title: 'Monetization Opportunities',
      description:
        "Publed empowers creators to monetize their knowledge in various ways, such as subscriptions, selling access to premium content, or donations."
    },
  ];
  return (
    <div className="relative flex flex-col items-center gap-4 bg-dark-blue-60 p-4 lg:gap-[40px] lg:p-[100px]">
      {/* Top SVG backgrounds */}
      <div className="absolute top-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1151"
          height="70"
          viewBox="0 0 1151 70"
          fill="none"
        >
          <path
            d="M579.977 65.4412C745.477 80.941 1101.48 53.4996 1150.48 -14.5L885.477 -153.86L0.476577 -101.059C138.81 -34.3921 422.983 50.738 579.977 65.4412Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0 z-0 hidden lg:block">
        <LogoBgPubled />
      </div>

      <div className="absolute left-0 top-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="488"
          height="141"
          viewBox="0 0 488 141"
          fill="none"
        >
          <path
            d="M487.976 -106.616C319.976 -106.616 80.3094 58.0506 -18.5239 140.384V-106.616H487.976Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="312"
          height="89"
          viewBox="0 0 312 89"
          fill="none"
        >
          <path
            d="M330.523 88.6836L330.523 -95.8164C209.023 -135.483 -26.5765 -191.016 3.02345 -95.8164C32.6235 -0.616435 233.69 66.8503 330.523 88.6836Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/*- Bottom SVG backgrounds */}

      <div className="absolute bottom-0 right-0 z-0 hidden lg:block">
        <LogoBgPubledBottom />
      </div>

      <div className="absolute bottom-0 left-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="312"
          height="70"
          viewBox="0 0 312 70"
          fill="none"
        >
          <path
            d="M-18.5239 0.891357L-18.524 185.391C102.976 225.058 338.576 280.591 308.976 185.391C279.376 90.1914 78.3094 22.7247 -18.5239 0.891357Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1149"
          height="72"
          viewBox="0 0 1149 72"
          fill="none"
        >
          <path
            d="M571.524 3.57471C406.024 -11.9251 49.5239 38.0752 0.523907 106.075L265.524 245.435L1148.02 171.075C1009.69 104.408 728.517 18.2779 571.524 3.57471Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="614"
          height="73"
          viewBox="0 0 614 73"
          fill="none"
        >
          <path
            d="M632.524 199.191L52.5239 170.14L0.523936 79.1399C119.572 23.6613 508.524 61.1399 632.524 0.139893L632.524 199.191Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      {/* Content */}

      <header className="z-10 text-3xl font-semibold leading-tight text-white lg:text-5xl lg:leading-[60px]">
        Why publish on Publed?
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 ">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgePage;
