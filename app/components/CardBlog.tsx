import Link from 'next/link';
import clsx from 'clsx';

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T;
  className?: string;
}) {
  let Component = as ?? 'div';

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-dark-blue-60/15" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T;
  href?: string;
}) {
  let Component = as ?? 'h2';

  return (
    <Component className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-800">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  const MAX_LENGTH = 125;
  if (typeof children === 'string' && children.length > MAX_LENGTH) {
    children = children.slice(0, MAX_LENGTH) + '...';
  }
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-400 dark:text-zinc-600">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-dark-blue-50"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T;
  decorate?: boolean;
}) {
  let Component = as ?? 'p';

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};

Card.Author = function CardAuthor({
  name,
  position,
  imageUrl,
}: {
  name: string;
  position: string;
  imageUrl: string;
}) {
  return (
    <div className={clsx('relative z-10 flex items-center space-x-4')}>
      <img
        src={imageUrl}
        alt={`${name}'s portrait`}
        className="dark: h-12 w-12 rounded-full object-cover" // Adjust the size as necessary
      />
      <div>
        <div className="text-base font-semibold text-zinc-800 dark:text-zinc-800">
          {name}
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {position}
        </div>
      </div>
    </div>
  );
};

Card.ImgPreview = function CardImgPreview({
  imageUrl,
  altText = 'Image preview',
}: {
  imageUrl?: string;
  altText?: string;
}) {
  // Define a default image URL
  const defaultImageUrl =
    'https://updg8.storage.googleapis.com/65fd2614-3bd2-44c3-8fc1-d93ba1de3bd2';

  return (
    <div className="relative z-10 w-full">
      <img
        src={imageUrl || defaultImageUrl}
        alt={altText}
        className="w-full rounded-lg object-cover"
        style={{ height: '200px' }}
      />
    </div>
  );
};

Card.Tag = function CardTag({
  tag,
  decorate = false,
}: {
  tag: string;
  decorate?: boolean;
}) {
  return (
    <div
      className={clsx(
        'relative z-10 flex items-center text-xs font-semibold tracking-wide',
        decorate && 'pl-3.5',
      )}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      <span className="rounded-full bg-dark-blue-20 px-2 py-1 text-dark-blue-60 dark:text-dark-blue-60/10">
        {tag}
      </span>
    </div>
  );
};
