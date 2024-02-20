/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavLink = {
  name: string;
  href: string;
  icon: any;
};

interface SiteFooterProps {
  navLinks: NavLink[];
}

const SiteFooter: FC<any> = ({ navLinks }) => {
  return (
    <footer className="bg-primary text-white mt-10 lg:mt-20">
      <nav className="l-container l-max-width">
        <div className="flex w-full h-20 items-center">
          <span className="block text-lg">Grid Demo</span>
        </div>
      </nav>
    </footer>
  );
};

export default SiteFooter;
