'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Button from '../components/Button';

const dataSlides = [
  {
    h1: 'Create your profile',
    p: 'You can easily create your profile, which will be minted as an NFT and will act as an NFT and will act as a digital and dynamic CV that will record all your proactivity during your knowledge-seeking journey.',
    button: 'Create Profile',
  },
  {
    h1: "Explore others' work",
    p: 'Explore an array of Knowledge Objects crafted by diverse creators, immersing yourself in a myriad of content formats. Engage with creators through interactive features such as comments, questions, or even extend a word of appreciation for their remarkable work.',
    button: 'Explore',
  },
  {
    h1: 'Share your Knowledge Artifacts',
    p: "Whether you're doing a coursework, a research project, educational material, official documents, you can do it easily, with a few steps and no friction, by uploading all the docs in the most diverse formats (e.g., pdfs, slides, videos, code).",
    button: 'Share Your Knowledge',
  },
  {
    h1: 'Create your workspace',
    p: "If you're creating a workshop, a course or anything else that needs to have more sections and more content, you can create your own dedicated Workspace and organize all your content seamlessly.",
    button: 'Create Workspace',
  },
];

export const Explore = () => {
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active => (active + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden bg-slate-100 pt-16 ss:pt-[80px] xl:pb-[120px]`}
    >
      <Image
        src="/bgLines.png"
        className="absolute left-0 top-0 z-0 w-full animate-lines"
        alt="box"
        width={1440}
        height={824}
      />
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="mb-12 font-sans text-4xl font-bold ss:text-5xl lg:mb-0">
          Explore the platform
        </h1>

        {/* Pictures Slide Show */}
        <div className="flex flex-col items-center justify-start gap-12 xl:flex-row">
          <div className="mt-12 hidden h-[510px] flex-col items-center justify-start overflow-hidden rounded-t-lg transition-all lg:flex">
            <Image
              src="/TopBarBrowser.png"
              className="z-20 w-[800px] rounded-t-lg"
              alt="box"
              width={800}
              height={200}
            />
            <Image
              src="/Content1.png"
              className={`z-10 w-[800px] rounded-b-lg transition-all ${active == 0 ? '-mt-1' : active == 1 ? '-mt-[230px] ss:-mt-[295px] md:-mt-[470px]' : active == 2 ? '-mt-[460px] ss:-mt-[590px] md:-mt-[940px]' : '-mt-[690px] ss:-mt-[590px] md:-mt-[1410px]'}`}
              alt="box"
              width={800}
              height={800}
            />
            {[2, 3, 4].map(i => (
              <Image
                src={`/Content${i}.png`}
                className="z-10 w-[800px] rounded-b-lg"
                alt="box"
                width={800}
                height={800}
                key={i}
              />
            ))}
          </div>
          <div className="absolute z-0 mt-12 hidden h-[500px] w-[800px] bg-[#55daff84] blur-3xl lg:block"></div>

          {dataSlides.map((data, i) => (
            <div
              key={i}
              className={`mt-8 hidden ${active == i ? 'lg:flex' : 'lg:hidden'} w-[400px] flex-col items-center justify-center text-center ss:w-[500px] md:w-[700px] xl:mt-0 xl:items-start xl:text-start`}
            >
              <h1 className="font-sans text-4xl font-bold">{data.h1}</h1>
              <p className="mt-4 font-sans text-default-50 md:mt-2 px-2">{data.p}</p>
              <Button
                variant="lightblue"
                className="mt-12 px-[36px] py-[10px] font-sans"
              >
                {data.button}
              </Button>
            </div>
          ))}

          {/* Dots */}
          <div className="relative bottom-[300px] top-0 z-10 hidden items-center justify-center gap-1 lg:top-1/2 lg:flex xl:absolute xl:bottom-[300px] xl:right-4 xl:flex-col">
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`h-[13px] w-[13px] cursor-pointer ${active == i ? 'bg-black' : 'bg-[#D9D9D9]'} rounded-full`}
              ></div>
            ))}
          </div>

          {/* Tablet img */}
          <Image
            src="/sec5pic1.png"
            className="z-10 mt-3 hidden w-[800px] rounded-lg md:block lg:hidden"
            alt="box"
            width={2000}
            height={1600}
          />
          <div className="absolute z-0 mt-12 hidden h-[400px] w-[800px] bg-[#55daff84] blur-3xl md:block lg:hidden xl:h-[800px] xl:w-[1200px]"></div>

          {/* Smartphone img */}
          <Image
            src="/sec5pic1_mobile.png"
            className="z-10 my-3 block w-[336px] rounded-lg md:hidden"
            alt="box"
            width={2000}
            height={1600}
          />
          <div className="absolute z-0 mt-12 block h-[475px] w-[336px] bg-[#55daff84] blur-3xl md:hidden"></div>

          <div className="-mt-4 mb-8 flex w-[400px] flex-col items-center justify-center text-center ss:w-[500px] md:w-[800px] lg:hidden">
            <h1 className="font-sans text-4xl font-bold">
              Create your Profile
            </h1>
            <p className="mt-4 font-sans text-default-50 md:mt-2 px-2">
              You can easily create your profile, which will be minted as an NFT and will act as an NFT and will act as a digital and dynamic CV that will record all your proactivity during your knowledge-seeking journey.
            </p>
            <Button
              variant="lightblue"
              className="mt-12 px-[36px] py-[10px] font-sans"
            >
              Share Your Knowledge
            </Button>
          </div>

          {/* Tablet img */}
          <Image
            src="/Content3.png"
            className="z-10 mt-3 hidden w-[800px] rounded-lg md:block lg:hidden"
            alt="box"
            width={2000}
            height={1600}
          />
          <div className="absolute z-0 mt-12 hidden h-[400px] w-[800px] bg-[#55daff84] blur-3xl md:block lg:hidden xl:h-[800px] xl:w-[1200px]"></div>

          {/* Smartphone img */}
          <Image
            src="/sec5pic3_mobile.png"
            className="z-10 my-3 block w-[336px] rounded-lg md:hidden"
            alt="box"
            width={2000}
            height={1600}
          />
          <div className="absolute z-0 mt-12 block h-[475px] w-[336px] bg-[#55daff84] blur-3xl md:hidden"></div>

          <div className="-mt-4 mb-8 flex w-[400px] flex-col items-center justify-center text-center ss:w-[500px] md:w-[800px] lg:hidden">
            <h1 className="font-sans text-4xl font-bold">
              Share your Knowledge
            </h1>
            <p className="mt-4 font-sans text-default-50 md:mt-2 px-2">
              Whether you're doing a coursework, a research project, educational material, official documents, you can do it easily, with a few steps and no friction, by uploading all the docs in the most diverse formats (e.g., pdfs, slides, videos, code).
            </p>
            <Button
              variant="lightblue"
              className="mt-12 px-[36px] py-[10px] font-sans"
            >
              Share Your Knowledge
            </Button>
          </div>

          <div className="relative">
            {/* Tablet img */}
            <Image
              src="/sec5pic2.png"
              className="absolute z-10 hidden w-[800px] rounded-lg md:block lg:hidden"
              alt="box"
              width={2000}
              height={1600}
            />
            <div className="relative top-0 z-0 my-3 hidden h-[400px] w-[800px] bg-[#55daff84] blur-3xl md:block lg:hidden"></div>

            {/* Smartphone img */}
            <Image
              src="/sec5pic2_mobile.png"
              className="absolute z-20  block w-[336px] rounded-lg md:hidden"
              alt="box"
              width={2000}
              height={1600}
            />
            <div className="z-0 mb-4 block h-[485px] w-[336px] bg-[#55daff84] blur-3xl md:hidden"></div>
          </div>

          <div>
            <div className="my-8 flex w-[400px] flex-col items-center justify-center text-center ss:w-[500px] md:w-[800px] lg:hidden xl:mt-0 xl:items-start xl:text-start">
              <h1 className="font-sans text-4xl font-bold">
                Explore others&apos; work
              </h1>
              <p className="mt-4 font-sans text-default-50 md:mt-2 px-2">
                Explore an array of Knowledge Objects crafted by diverse
                creators, immersing yourself in a myriad of content formats.
                Engage with creators through interactive features such as
                comments, questions, or even extend a word of appreciation for
                their remarkable work.
              </p>
              <Button
                variant="lightblue"
                className="mt-12 px-[36px] py-[10px] font-sans"
              >
                Explore
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Tablet img */}
            <Image
              src="/Content4.png"
              className="absolute z-10 hidden w-[800px] rounded-lg md:block lg:hidden"
              alt="box"
              width={2000}
              height={1600}
            />
            <div className="relative top-0 z-0 my-3 hidden h-[400px] w-[800px] bg-[#55daff84] blur-3xl md:block lg:hidden"></div>

            {/* Smartphone img */}
            <Image
              src="/sec5pic4_mobile.png"
              className="absolute z-10 -mb-8 block w-[336px] rounded-lg md:hidden"
              alt="box"
              width={2000}
              height={1600}
            />
            <div className="z-0 mb-4 block h-[485px] w-[336px] bg-[#55daff84] blur-3xl md:hidden"></div>
          </div>

          <div className="my-8 flex w-[400px] flex-col items-center justify-center text-center ss:w-[500px] md:w-[800px] lg:hidden">
            <h1 className="font-sans text-4xl font-bold">
              Create your workspace
            </h1>
            <p className="mt-4 font-sans text-default-50 md:mt-2 px-3">
              If you&apos;re creating a workshop, a course or anything else that
              needs to have more sections and more content, you can create your
              own dedicated Workspace and organize all your content seamlessly.
            </p>
            <Button
              variant="lightblue"
              className="mt-12 px-[36px] py-[10px] font-sans"
            >
              Create Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
