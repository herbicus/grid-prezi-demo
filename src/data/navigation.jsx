import {
  faGear,
  faHouse,
  faTableCells,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export const baseLinks = [
  { name: "Home", href: "/", icon: faHouse },
  { name: "Base Setup", href: "/base-setup", icon: faGear },
  { name: "Grid Demos", href: "/grid-demos", icon: faTableCells },
  { name: "Demo", href: "/demo", icon: faDesktop },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/herb-torres-7b5aa1a1",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/herb_torres/",
    icon: faInstagram,
  },
  { name: "CodePen", href: "https://codepen.io/herbicus", icon: faCodepen },
  {
    name: "Facebook",
    href: "https://www.facebook.com/herb.torres.73",
    icon: faFacebook,
  },
];
