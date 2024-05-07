import React from 'react';
import LogoBgPubled from '../icons/Logo-bg-publed';
import LogoBgPubledBottom from '../icons/Logo-bg-publed-bottom';
import Image from 'next/image';

import Feature_1_2 from '../icons/Features_1.2.png';
import Feature_1_1 from '../icons/features_1.1.png';
import Feature_2 from '../icons/features_2.png';
import Feature_3 from '../icons/features_3.png';
import Feature_4_1 from '../icons/features_4.1.png';
import Feature_4_2 from '../icons/features_4.2.png';

const KnowledgePage = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 bg-dark-blue-60 py-4 lg:gap-[40px] lg:p-[100px]">
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

      <header className="z-10 text-center text-3xl font-semibold leading-tight text-white lg:text-5xl lg:leading-[60px]">
        Empowering Knowledge <br /> and Connections
      </header>

      <div className="z-10 flex w-full px-6 flex-col justify-center gap-4 md:w-2/3 lg:w-full lg:flex-row">
        <section className="relative h-[300px] overflow-hidden rounded bg-light-blue-60 p-4 shadow lg:h-[400px] w-full lg:w-[820px]">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Create a Knowledge Object
          </h2>
          <div className="absolute bottom-0 left-0 z-0 w-4/6 transition-transform duration-300 ease-in-out hover:scale-110 sm:-bottom-12 sm:left-0 md:-bottom-12 md:left-0">
            <Image src={Feature_1_1} alt="Image 1401" />
          </div>
          <div className="absolute -bottom-12 -right-36 left-20 transition-transform duration-300 ease-in-out hover:scale-110 sm:-bottom-36 sm:-right-72 sm:left-56 md:-bottom-28 md:-right-72 md:left-96 ">
            <Image src={Feature_1_2} alt="Feature_1.2" />
          </div>
        </section>

        <section className="relative  h-[300px] w-full overflow-hidden rounded bg-light-blue-60 p-4 shadow  sm:hidden md:hidden lg:flex lg:h-[400px] lg:w-[400px]">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">Explore</h2>

          <div className="absolute -bottom-0 -right-36 left-0 transition-transform duration-300 ease-in-out hover:scale-105 sm:-bottom-12 sm:right-20 lg:-bottom-4 lg:-right-64">
            <Image src={Feature_2} alt="Feature_1.2" />
          </div>
        </section>
      </div>

      {/* Content for md*/}
      <div className="z-10 hidden flex-row justify-center gap-4 sm:flex md:w-2/3 lg:hidden lg:w-full lg:flex-row">
        <section className="relative h-[300px] w-full overflow-hidden rounded bg-light-blue-60 p-4 shadow ">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">Explore</h2>

          <div className="absolute -bottom-14 transition-transform duration-300 ease-in-out hover:scale-105 sm:-bottom-12 sm:-right-64">
            <Image src={Feature_2} alt="Feature_1.2" />
          </div>
        </section>

        <section className="relative h-[300px] w-full overflow-hidden rounded bg-light-blue-60 p-4 shadow">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Engage in Discussions
          </h2>
          <div className="absolute -right-24 bottom-0 transition-transform duration-300 ease-in-out hover:scale-110 ">
            <Image src={Feature_3} alt="Feature_1.2" />
          </div>
        </section>
      </div>
      {/* Content for md end*/}

      <div className="z-10 flex  w-full px-6  flex-col justify-center gap-4 md:w-2/3 lg:w-full lg:flex-row">
        <section className="relative h-[300px] overflow-hidden rounded bg-light-blue-60 p-4 shadow sm:hidden md:hidden lg:flex lg:h-[400px] lg:w-[400px]">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Engage in Discussions
          </h2>
          <div className="absolute -right-24 bottom-0 transition-transform duration-300 ease-in-out hover:scale-110 ">
            <Image src={Feature_3} alt="Feature_1.2" />
          </div>
        </section>

        <section className="relative h-[300px] overflow-hidden rounded bg-light-blue-60 p-4 shadow lg:h-[400px] lg:w-[820px]">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Create your Profile
          </h2>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">(Digital CV)</h2>

          <div className="absolute -bottom-8 -left-24 right-36 transition-transform duration-300 ease-in-out hover:scale-110 sm:-bottom-14 sm:left-0 sm:right-40 md:-bottom-36 lg:-bottom-8 lg:left-0 lg:right-96">
            <Image src={Feature_4_1} alt="Feature_1.2" />
          </div>

          <div className="absolute -bottom-16 -right-32 left-24 transition-transform duration-300 ease-in-out hover:scale-110 sm:-bottom-48 sm:-right-40 sm:left-40 md:-bottom-28 md:-right-40 md:left-96">
            <Image src={Feature_4_2} alt="Feature_1.2" />
          </div>
          {/* Profile content */}
        </section>
      </div>
    </div>
  );
};

export default KnowledgePage;
