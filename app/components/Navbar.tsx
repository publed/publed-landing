'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from '../icons/Logo';
import Publed from '../icons/Publed';
import Button from './Button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPage = usePathname();
  console.log(currentPage);
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-screen bg-dark-blue-60 shadow-md shadow-dark-blue-60/60"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center space-x-2"
              >
                <Logo className="h-8 w-auto sm:h-10 md:h-11 lg:h-10" />
                <Publed
                  fill="white"
                  className="block h-3/5 w-3/5 md:h-1/2 md:w-1/2 lg:md:w-3/5 lg:h-3/5 "
                />
                {/* <img src="/logoh.png" alt="publed" className="w-1/5" /> */}
              </Link>

              <div className="hidden flex-grow justify-center sm:flex">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className="relative transform rounded-md px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
                    aria-current="page"
                  >
                    Home
                    <span
                      className={`${currentPage == '/' ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                    ></span>{' '}
                    {/* Active indicator bar */}
                  </Link>
                  <Link
                    href="/about"
                    className="transform rounded-md px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
                  >
                    About
                    <span
                      className={`${currentPage == '/about' ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                    ></span>
                  </Link>
                  <Link
                    href="/blog"
                    className="transform rounded-md px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
                  >
                    Blog
                    <span
                      className={`${currentPage.includes('/blog') ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                    ></span>
                  </Link>
                </div>
              </div>

              <Link href="https://app.publed.io/" className="hidden sm:block" target='_blank'>
                <Button variant="light">
                  Open App
                </Button>
              </Link>

              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-dark-blue-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col items-center space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="relative block transform rounded-md px-3 py-2 text-base font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
                aria-current="page"
              >
                Home
                <span
                  className={`${currentPage == '/' ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                ></span>
              </Link>
              <Link
                href="/about"
                className="block transform rounded-md px-3 py-2 text-base font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
              >
                About
                <span
                  className={`${currentPage == '/about' ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                ></span>
              </Link>
              <Link
                href="/blog"
                className="block transform rounded-md px-3 py-2 text-base font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-dark-blue-70"
              >
                Blog
                <span
                  className={`${currentPage.includes('/blog') ? 'absolute' : 'hidden'} bottom-0 left-0 right-0 h-0.5 bg-white`}
                ></span>
              </Link>
              <Link href="https://app.publed.io/" target='_blank'>
                <Button variant="light">
                  Open App
                </Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
