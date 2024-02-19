/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavLink = {
  name: string;
  href: string;
  icon: any;
};

interface SiteFooterProps {
  navLinks: NavLink[];
}

const SiteFooter: FC<SiteFooterProps> = ({ navLinks }) => {
  return (
    <footer className="pf-container border-0 bg-primary py-10 text-sm">
      <nav className="mx-auto flex max-w-8xl flex-wrap items-center justify-end sm:justify-between">
        <p className="hidden text-xs text-white sm:block">
          © {new Date().getFullYear()} Herb Torres
        </p>

        <ul className="flex flex-nowrap space-x-6">
          {navLinks &&
            navLinks.map((link, index) => {
              const key = `link-${index}`;

              return (
                <li key={key}>
                  <a
                    href={link.href}
                    className="border-0 text-white transition hover:border-0 hover:text-secondary"
                    target="_blank"
                    rel="nofollow noreferrer"
                    aria-label={link.name}
                    title={link.name}
                  >
                    <span className="sr-only">{link.name}</span>
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </footer>
  );
};

export default SiteFooter;
