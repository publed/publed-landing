import Image from 'next/image';
import { Container } from '../components/Container';

export function SimpleLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col gap-44 bg-slate-100 relative">

      <div className='h-full w-full absolute left-0 top-0 z-0'>
        <Image
          src="/bgLines.png"
          className="w-full animate-lines h-full object-cover"
          alt="background lines"
          fill
        />
      </div>
      <Container className="my-32">
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </Container>
    </div>
  );
}
