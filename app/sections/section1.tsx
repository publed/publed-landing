// section1.tsx
'use client';
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Play from '../icons/Play';
import Left from '../icons/Left';
import Right from '../icons/Right';
import Image from 'next/image';
import Solana from '../icons/Solana';
import McMasterUniversity from '../icons/McMasterUniversity';
import UMinho from '../icons/UMinho';
import { Reveal } from '../components/Reveal';
import Button from '../components/Button';
import SolanaFoundation from '../icons/SolanaFoundation';
import Marquee from 'react-fast-marquee';
import Nucleo from '../icons/Nucleo';
import PlayButton from '../icons/PlayButton';
import Metaplex from '../icons/Metaplex';

export const Slogan = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-slate-100 py-16 ss:pb-[120px] ss:pt-[80px]">
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex min-h-screen items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-center align-middle shadow-xl transition-all">
                <iframe
                  width="100%"
                  height="auto"
                  style={{ aspectRatio: '16 / 9' }}
                  src="https://www.youtube.com/embed/48wrJZw6sxA?vq=hd1080&autoplay=1&controls=0&rel=0&modestbranding=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <div className="z-20 flex flex-col gap-4">
        <h1 className="cursor-default px-3 text-center font-sans text-4xl font-bold text-black sm:text-5xl xl:text-7xl">
          Next-gen Knowledge-centric <br /> Decentralized Platform
        </h1>
        <p className="mt-3 cursor-default hyphens-auto break-all px-10 text-center text-sm text-black lg:w-full xl:text-xl">
          Unlock the potential of your Knowledge with our decentralized,
          transparent and collaborative platform! <br /> A new way of sharing
          Educational or Scientific knowledge. Join us now!
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-4 ss:flex-row ss:gap-12">
          <Button
            variant="blue"
            className="ring-2 ring-dark-blue-60 ring-offset-2 hover:ring-offset-0"
            href='https://app.publed.io/'
          >
            Open App
          </Button>
          <div
            className="flex items-center gap-3 text-dark-blue-60 transition-all ease-in-out hover:text-dark-blue-50"
            onClick={openModal}
          >
            <PlayButton className="h-12 w-12 cursor-pointer rounded-full ring-2 ring-dark-blue-60 hover:ring-0" />
            <span className="cursor-pointer  underline ">Watch Demo</span>
          </div>
        </div>
      </div>
      <Reveal>
        <div className="z-10 flex items-center justify-center">
          <Image
            src="/hero_section.png"
            className="z-10 mt-12 hidden max-w-[400px] rounded-lg sm:block sm:max-w-[700px] xl:max-w-[1200px]"
            alt="box"
            width={2000}
            height={1600}
          />
          <Image
            src="/boxMobile.png"
            className="z-10 my-3 block min-w-[336px] max-w-[400px] sm:hidden"
            alt="box"
            width={2000}
            height={1600}
          />
          <div className="absolute z-0 h-[980px] w-[336px] bg-[#55DBFF] blur-3xl sm:h-[500px] sm:w-[700px] xl:h-[800px] xl:w-[1200px]"></div>
        </div>
      </Reveal>
      <div className="mt-0 flex cursor-default flex-col items-center justify-center sm:mt-16">
        <span className="w-[330px] text-center font-sans font-normal uppercase text-default-50 sm:mb-8 sm:w-full xl:text-lg">
          Trusted and recognized by knowledge seekers from
        </span>
        <div className="mt-6 flex w-screen items-center justify-center overflow-hidden">
          <Marquee
            gradient={false}
            speed={50}
            loop={0}
            className=" overflow-hidden"
          >
            <SolanaFoundation className="mx-6 h-[40px]" />
            <Solana className="mx-6 h-[40px]" />
            <UMinho className="mx-6" />
            <McMasterUniversity className="mx-6 -mb-4 h-[40px]" />
            <Nucleo className="mx-6" />
            <Metaplex className="mx-6" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
