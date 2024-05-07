'use client';
import React, { useState } from 'react';
import LogoBgPubled from '../icons/Logo-bg-publed';
import LogoBgPubledBottom from '../icons/Logo-bg-publed-bottom';
import Image from 'next/image';

import Logo from '../icons/Logo';

import WaveTop from '../icons/Wave-Top';
import Publed from '../icons/Publed';

import SearchIcon from '../icons/SearchIcon';
import Button from '../components/Button';
import WaveBG from '../icons/WaveBG';
import { useRouter } from 'next/navigation';

const KnowledgePage = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push(
      `https://app.publed.io/explore?search=${encodeURIComponent(searchInput)}`,
    );
  };
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden bg-slate-100 p-4 pb-[120px] md:pb-4 lg:gap-[40px] lg:p-[100px]">
      {/* <div className="absolute top-0 z-0 h-full w-full lg:block">
        <WaveTop />
      </div> */}

      {/* <Image
        src="/Wave-Top.png"
        alt="Wave Top"
        className="absolute top-0 z-0 w-full"
        width={1440}
        height={824}
      /> */}
      {/*background fit*/}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <WaveBG className="min-h-full min-w-full" />
      </div>

      {/* Top SVG backgrounds */}
      <div className="absolute top-0 z-0 hidden lg:block">
        <svg
          width="1150"
          height="105"
          viewBox="0 0 1150 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M579.5 100.796C745 116.295 1101 88.8541 1150 20.8545L885 -118.506L1.4924e-05 -65.7043C138.333 0.962344 422.507 86.0925 579.5 100.796Z"
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
          width="493"
          height="176"
          viewBox="0 0 493 176"
          fill="none"
        >
          <path
            d="M492.5 -71.2617C324.5 -71.2617 84.8333 93.4049 -14 175.738V-71.2617H492.5Z"
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

      <div className="absolute -bottom-64 -right-24 z-0 hidden lg:block">
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

      {/* <div className="absolute bottom-0 z-0 hidden lg:block">
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
      </div> */}

      {/* <div className="absolute bottom-0 right-0 z-0 hidden lg:block">
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
      </div> */}

      {/*Knoledge Page Image */}
      {/* Image use original height and widht KO_Left_Top.png */}
      <Image
        src="/KO_Left_Top.png"
        alt="Knowledge Page Image"
        className="absolute left-0 top-0 z-0 hidden md:block"
        width={238.95}
        height={318.578}
      />
      <Image
        src="/KO_Left_Mid.png"
        alt="Knowledge Page Image"
        className="absolute left-14 top-1/2 z-0 hidden -translate-y-1/2 transform md:block"
        width={262.038}
        height={350.376}
      />

      <Image
        src="/KO_Left_Bottom.png"
        alt="Knowledge Page Image"
        className="absolute bottom-0 left-0 z-0 hidden md:block"
        width={239.561}
        height={318.76}
      />

      {/*right side images */}
      <Image
        src="/KO_Right_Top.png"
        alt="Knowledge Page Image"
        className="absolute right-0 top-0 z-0 hidden md:block"
        width={260.523}
        height={347.34}
      />

      <Image
        src="/KO_Right_Bottom.png"
        alt="Knowledge Page Image"
        className="absolute bottom-0 right-0 z-0 hidden md:block"
        width={319.538}
        height={425.984}
      />

      <div className="absolute bottom-0 right-0 z-0 block md:hidden">
        <Image
          src="/research-object-bottom-right-2.png"
          alt="Research Object"
          width={100} // Adjust the size as needed
          height={100} // Adjust the size as needed
        />
      </div>

      <div className="absolute bottom-0 right-12 z-0 block md:hidden">
        <Image
          src="/research-object-bottom-right.png"
          alt="Research Object"
          width={100} // Adjust the size as needed
          height={100} // Adjust the size as needed
        />
      </div>

      <div className="relative flex flex-col items-center gap-4 overflow-hidden px-96 pb-4 pt-8 lg:gap-[40px]">
        {/* Content with responsive margins */}
        <div className="z-10 flex w-full flex-col items-center gap-12">
          <header className="mt-8 flex justify-center gap-6 text-center text-5xl font-semibold leading-[60px] text-[color:var(--default-0,#F3F3F3)] [font-family:'Noto_Sans'] lg:mt-0">
            Discover
            <div className="flex flex-shrink-0 items-center space-x-2">
              <Logo className="h-8 w-auto sm:h-14" />
              <Publed fill="white" className="hidden sm:block" />
            </div>
          </header>

          <h1 className=" text-center text-base font-medium leading-6 text-[color:var(--default-30,#C8C8CE)] [font-family:'Noto_Sans']">
            Search all the knowledge published on our platform, interact with
            other creators or create your own Knowledge Object!
          </h1>

          {/* Searchbar */}
          <form
            onSubmit={handleSearch}
            className="relative mx-auto w-full max-w-lg"
          >
            <input
              type="text"
              placeholder="Search for knowledge"
              className="w-full rounded-full border border-[color:var(--default-20,#D4D4D8)] p-2.5 pl-3 pr-10 shadow-[0px_0px_60px_0px_rgba(5,69,128,0.25)] [background:#FFF]"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </button>
          </form>

          {/* Explore App Button */}
          <div className="flex flex-col items-center justify-center gap-4 ">
            <span className="text-white">or</span>
            <Button variant="light" className="w-[200px]">
              Explore App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
