import { Link } from 'wouter';
import Cube from '../components/cube';

const Home: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-blue-950 text-white">
      <nav className="flex gap-4 bg-blue-900 p-4 text-lg">
        <Link href="/">Home</Link>
        <Link href="/music">Music</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="flex-auto flex flex-col gap-8 items-center pt-24">
        <div className="h-[300px]">
          <Cube />
        </div>
        <div className="text-xl">Welcome to Sventi's Corner</div>
      </div>
    </div>
  );
};

export default Home;
