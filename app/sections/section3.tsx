'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfessorSVG from '../icons/Professor';
import ResearcherSVG from '../icons/Researcher';
import StudentSVG from '../icons/Student';
import OrganizationSVG from '../icons/Organizations';
import Button from '../components/Button';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const KnowledgePage = () => {
  const [selectedRole, setSelectedRole] = useState('Professor');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const roleContent = {
    Professor: {
      SVG: <ProfessorSVG />,
      list: [
        'Aggregate Your Offical Docs',
        'Own Your Content',
        'Get a Proof of your Work (Dynamic CV)',
        'Engage and Empower Your Students',
        'Monetize Your Expertise',
      ],
      details: [
        'Consolidate all your valuable resources, regardless of format (PDF, PPTX, PNG, etc.), into a single, accessible Knowledge Object.',
        'Safeguard your contributions with indisputable Proof of Ownership provided by the fundamentals of the Blockchain.',
        'Traditional CVs often lack the dynamism to showcase your professional evolution effectively. Craft a vibrant, dynamic profile that seamlessly links to your accomplishments, interests, and contributtions, facilitating easy sharing.',
        ' Foster seamless collaboration with your students, providing prompt responses to their inquiries and establishing a close-knit community centered around the content you generate',
        'Transform your Knowledge into a lucrative endeavor while enriching the learning experiences of others on their educational journey',
      ],
    },
    Researcher: {
      SVG: <ResearcherSVG />,
      list: [
        'Aggregate Your Scientific Knowledge',
        'Retain Copyright Ownership',
        'Dynamically showcase your work',
        'Collaborate and Discuss',
        'Monetize Your Expertise',
      ],
      details: [
        'Consolidate all your research artifacts, regardless of format (PDF, PPTX, PNG, etc.), into a single, accessible Knowledge Object.',
        'Keep the copyright of your scientific contributions and take advantage of that intellectual property!',
        'Have your lively dynamic profile that directly connects to your contributions and easily share it with the world. You can also connect to other profiles to automatically follow their work.',
        'Create a community around Scientific Knowledge by our decentralized social network. Anyone can comment and engage on your Knowledge/Research Objects and easily interact with authors.',
        'Transform your Knowledge into a lucrative endeavor while enriching the learning experiences of others on their educational journey.',
      ],
    },
    Student: {
      SVG: <StudentSVG />,
      list: [
        'Aggregate Your Knowledge',
        'Own Your Content',
        'Get a Proof of your Work (Dynamic CV)',
        'Collaborate and Socialize',
        'Monetize Your Work',
      ],
      details: [
        'Consolidate all the material you have created throughout your academic journey, regardless of format (PDF, PPTX, PNG, etc.), into a single, accessible Knowledge Object.',
        'Safeguard your contributions with indisputable Proof of Ownership provided by the fundamentals of the Blockchain.',
        'Traditional CVs often lack the dynamism to showcase your professional evolution effectively. Craft a vibrant, dynamic profile that seamlessly links to your accomplishments, interests, and contributtions, facilitating easy sharing.',
        'Create and engange in a vibrant community centered around Knowledge, collaborating with your peers and professors to enhance your learning experience, contributing and collecting more knowledge!',
        'Transform your Knowledge into a lucrative endeavor while enriching the learning experiences of others on their educational journey.',
      ],
    },
    Organizations: {
      SVG: <OrganizationSVG />,
      list: [
        'Aggregate Your Offical Docs On-chain',
        'Own Your Content',
        'Foster Collaboration within your Community',
        'Ensure Integrity and Immutability of your Docs',
        'Be Transparent with your Community'
      ],
      details: [
        'Consolidate all official your official docs, regardless of format (PDF, PPTX, PNG, etc.), within your Organization Workspace.',
        'Safeguard your content with indisputable Proof of Ownership provided by the fundamentals of the Blockchain.',
        "Foster collaboration and engagement within your organization’s community, enabling seamless communication and knowledge sharing among members.",
        'Guarantee the integrity and immutability of your documents by storing them on decentralized storage, ensuring that they remain tamper-proof and unchangeable.',
        'Enhance transparency and trust within your community by making all organizational documents easily accessible and verifiable on the blockchain.',
      ],
    },
  };

  const currentRoleContent = roleContent[
    selectedRole as keyof typeof roleContent
  ] as {
    SVG: React.ReactElement;
    list: string[];
    details: string[];
  };

  const handleDisclosure = (index: number) => {
    setOpenItem(prevIndex => (prevIndex !== index ? index : null));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-[40px] overflow-hidden bg-slate-100 px-6 py-4">
      <Image
        src="/bgLines.png"
        className="absolute left-0 top-0 z-0 w-full animate-lines"
        alt="background lines"
        width={1440}
        height={824}
      />
      <header className="z-10 text-center text-3xl font-semibold leading-tight text-black lg:text-5xl lg:leading-[60px]">
        Platform for Everyone
      </header>
      <div className="z-10 flex flex-col gap-4 md:flex-row">
        {/* Button components for selecting role */}
        <Button
          variant={selectedRole === 'Professor' ? 'blue' : 'light'}
          onClick={() => setSelectedRole('Professor')}
        >
          For Professors
        </Button>
        <Button
          variant={selectedRole === 'Researcher' ? 'blue' : 'light'}
          onClick={() => setSelectedRole('Researcher')}
        >
          For Researchers
        </Button>
        <Button
          variant={selectedRole === 'Student' ? 'blue' : 'light'}
          onClick={() => setSelectedRole('Student')}
        >
          For Students
        </Button>
        <Button
          variant={selectedRole === 'Organizations' ? 'blue' : 'light'}
          onClick={() => setSelectedRole('Organizations')}
        >
          For Organizations
        </Button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRole}
          className="z-10 flex flex-col gap-4 md:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-12 rounded-lg bg-zinc-100 px-8 py-10 shadow-[0px_0px_24px_0px_rgba(5,69,128,0.15)] md:flex-row lg:w-[950px]">
            <div className="">{currentRoleContent.SVG}</div>
            <div className="w-full flex-1 md:w-1/2">
              <ul className="space-y-2">
                {currentRoleContent.list.map((item, index) => (
                  <Disclosure key={index} as="div" className="w-full">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="form-ring flex w-full justify-between rounded-lg bg-regular-blue-20 px-4 py-2 text-left text-sm font-medium text-dark-blue-60 transition duration-300 ease-in-out hover:bg-regular-blue-30 focus:bg-regular-blue-20 focus:outline-none focus-visible:ring focus-visible:ring-dark-blue-60 focus-visible:ring-opacity-75"
                          onClick={() => handleDisclosure(index)}
                        >
                          {item}
                          <ChevronUpIcon
                            className={`${open ? 'rotate-180' : ''} h-5 w-5 transform text-dark-blue-60 transition-transform duration-200`}
                          />
                        </Disclosure.Button>
                        <AnimatePresence>
                          {open && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                {currentRoleContent.details[index]}
                              </Disclosure.Panel>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </Disclosure>
                ))}
              </ul>

              {/* <div className="mt-4 flex justify-center md:justify-start">
                <Button variant="light">Sign Up</Button>
              </div> */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default KnowledgePage;
