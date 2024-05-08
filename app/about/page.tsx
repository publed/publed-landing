import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Teams from '../sections/teams';

export default function Home() {
  return (
    <div className="pt-6">
      <Navbar />
      <Teams />
      <Footer />
    </div>
  );
}
