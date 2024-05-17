import { Container } from '../components/Container';
import Footer from './Footer';
import Navbar from './Navbar';

export function SimpleLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col gap-44 bg-slate-100 ">
      <Container className="mt-32">
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </Container>
    </div>
  );
}
