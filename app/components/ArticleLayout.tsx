'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '../providers';
import { Container } from '../components/Container';
import { Prose } from '../components/Prose';
import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { useEffect, useState } from 'react';
import Head from 'next/head';

function useScrollDirection() {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [buttonStyle, setButtonStyle] = useState({
    opacity: 1,
    transform: 'translateY(0px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setButtonStyle({
          opacity: 0,
          transform: `translateY(-${Math.min(100, currentScrollY - lastScrollY)}px)`,
        });
      } else {
        // Scrolling up
        setButtonStyle({
          opacity: 1,
          transform: 'translateY(0px)',
        });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return buttonStyle;
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);
  const buttonStyle = useScrollDirection();

  return (
    <div className="bg-slate-100 dark:bg-zinc-900">
      <Head>
        <title>{article.metadata?.title}</title>
        <meta name="description" content={article.metadata?.description} />
        <meta property="og:title" content={article.metadata?.title} />
        <meta
          property="og:description"
          content={article.metadata?.description}
        />
        <meta property="og:image" content={article.metadata?.imgPreview} />
        <meta property="og:type" content="article" />
        <meta
          property="article:published_time"
          content={article.metadata?.date}
        />
      </Head>

      <Navbar />
      <Container className="py-32 ">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="fixed left-4 top-20 z-50 mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-all duration-500 ease-in-out md:left-20 md:top-32 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              style={{
                opacity: buttonStyle.opacity,
                transform: buttonStyle.transform,
              }}
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>

            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {article.title}
                </h1>
                <time
                  dateTime={article.date}
                  className="order-first flex items-center justify-between text-base text-zinc-400 dark:text-zinc-500"
                >
                  <div className="flex items-center space-x-3">
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <Link
                    href={article.author.link}
                    passHref
                    className="flex items-center space-x-3"
                  >
                    <span />
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="ml-3">{article.author.name}</span>
                  </Link>
                </time>
              </header>
              {article.tags?.length > 0 && (
                <div className="mt-4 flex items-center space-x-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-500 px-2 py-1 text-sm font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-8">
                <Image
                  src={article.imgPreview}
                  alt={`${article.title} image preview`}
                  className="rounded-lg shadow-lg"
                  width={1200}
                  height={600}
                />
              </div>
              <Prose className="mt-8" data-mdx-content>
                {children}
              </Prose>
            </article>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
