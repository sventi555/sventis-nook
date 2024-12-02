import clsx from 'clsx';
import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb,
} from 'react-aria-components';
import { Link } from 'wouter';

interface Link {
  text: string;
  url?: string;
}

interface BreadcrumbsProps {
  links: Link[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <AriaBreadcrumbs className="mb-4 flex [&>:not(:last-child)]:after:px-2 [&>:not(:last-child)]:after:text-neutral-600 [&>:not(:last-child)]:after:content-['>']">
      {links.map((link, i) => (
        <Breadcrumb key={i}>
          <Link
            className={clsx('font-light', {
              'text-yellow-950 underline underline-offset-4': link.url,
              'font-normal': !link.url,
            })}
            href={link.url ?? ''}
          >
            {link.text}
          </Link>
        </Breadcrumb>
      ))}
    </AriaBreadcrumbs>
  );
};

export default Breadcrumbs;
