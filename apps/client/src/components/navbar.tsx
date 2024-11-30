import { Link } from 'wouter';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 flex w-full gap-4 bg-blue-900 p-4 text-lg text-neutral-300">
      <Link href="/">Home</Link>
      <Link href="/music">Music</Link>
      <Link href="/notes">Notes</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
