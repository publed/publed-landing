import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Teams from '../sections/teams';
import { SimpleLayout } from '../components/SimpleLayout';

export default function Home() {
  return (
    <SimpleLayout
    >
      <Teams />
    </SimpleLayout>
  );
}
