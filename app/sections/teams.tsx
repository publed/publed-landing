import React from 'react';
import LogoGrayPubled from '../icons/LogoGrayPubled';
const people = [
  {
    name: 'Sandro Pinto, PhD',
    role: 'Co-Founder & Management',
    bio: 'Forward-thinking leader with 10+ years of experience managing and leading research groups and startups. Prolific writer with 100+ scientific publications. Web3 advisor and consultant.',
    imageUrl:
      'https://www.publed.io/static/media/sandro.e9e2e04289ba8efc9cf0.png',
    xUrl: 'https://twitter.com/sandro2pinto',
    linkedinUrl: 'https://www.linkedin.com/in/sandro2pinto/',
    publedUrl: 'https://www.publed.io/',
  },
  {
    name: 'Vítor Ribeiro',
    role: 'Co-Founder & Tech',
    bio: 'Web3 Full Stack Developer with 3 years of experience leading R&D projects and specializing in Web3 solutions. Web3 Hackathon Hunter.',

    imageUrl:
      'https://www.publed.io/static/media/vitor.3ac344f1f725df83366f.png',
    xUrl: 'https://twitter.com/vitorhsr99',
    linkedinUrl: 'https://www.linkedin.com/in/vitor-ribeiro99/',
    publedUrl: 'https://www.publed.io/',
  },

  {
    name: 'Mohamed Hassan, PhD',
    role: 'Co-Founder & Business',
    bio: '15+ years in R&D of software and hardware solutions. Leading a research lab with 35+ papers in top venues and several awards. Worked in key industry players including Intel and Qualcomm.',
    imageUrl:
      'https://www.publed.io/static/media/mohamed.4fd0bd1e61fdb69860bd.png',
    xUrl: 'https://twitter.com/ProfMoHassan',
    linkedinUrl: 'https://www.linkedin.com/in/profmohassan/',
    publedUrl: 'https://www.publed.io/',
  },
];

export default function Example() {
  return (
    <div className="bg-slate-100 py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Passionate team of Professors and Researchers who understand the ins
            and outs of this industry.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map(person => (
            <li key={person.name} className="rounded-2xl  px-8 py-10">
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.publedUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LogoGrayPubled className="h-5 w-5 fill-gray-400/45 hover:fill-gray-300" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
