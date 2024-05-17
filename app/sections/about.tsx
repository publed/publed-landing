"use client"
import React from 'react';
import Group from '../icons/Group';
import { useInView, motion, useAnimation } from 'framer-motion';
import { Reveal } from '../components/Reveal';


export default function Vision() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        delay: 0.25,
      }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We are building a decentralized platform to enable <span className='text-black font-bold animate-pulse'>Knowledge seekers</span> (e.g., Students, Professors/Researchers, Individuals) to aggregate, share, and monetize their Educational and Scientitic Knowledge Artifacts
          </p>
        </div>
        <div className='w-full flex justify-center pb-10 pt-6'>
          <Group />
        </div>
      </div>
    </motion.div>
  );
}
