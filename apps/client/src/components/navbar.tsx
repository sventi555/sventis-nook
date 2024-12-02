import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'wouter';

interface NavLinkProps {
  url: string;
  active: boolean;
}

const NavLink: React.FC<PropsWithChildren<NavLinkProps>> = ({
  url,
  active,
  children,
}) => {
  return (
    <Link href={url} className={clsx('text-lg', { 'text-yellow-950': active })}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [location] = useLocation();
  console.log(location);

  return (
    <nav className="sticky top-0 z-10 flex w-full gap-6 bg-blue-950 p-4 shadow-md">
      <NavLink url="/" active={location === '/'}>
        Home
      </NavLink>
      <NavLink url="/music" active={location.startsWith('/music')}>
        Music
      </NavLink>
      <NavLink url="/notes" active={location.startsWith('/notes')}>
        Notes
      </NavLink>
      <NavLink url="/about" active={location === '/about'}>
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
