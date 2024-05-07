import { Container } from '../components/Container';
import Footer from './Footer';
import Navbar from './Navbar';

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col gap-44 bg-slate-100 ">
      <Navbar />
      <Container className="mt-36 h-screen">
        <header className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-2 text-lg leading-8 text-gray-600">{intro}</p>
          </div>
        </header>
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </Container>
      <Footer />
    </div>
  );
}
