import Navbar from '../components/Navbar';
import About from '../sections/about';
import Teams from '../sections/teams';
import { SimpleLayout } from '../components/SimpleLayout';
import Divider from '../components/Divider';

export default function Home() {
  return (
    <SimpleLayout
    >
      <About />
      <Divider />
      <div className='mt-16'>
        <Teams />
      </div>
    </SimpleLayout>
  );
}
