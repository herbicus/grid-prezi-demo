/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MobileNavigation from "./MobileNavigation";

import {
  faBars,
  faEnvelope,
  faSkullCrossbones,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { baseLinks } from "@/data/navigation";

// import logoLockup from "@/assets/images/wsv-logo.png";

type SiteHeaderProps = {
  isBottomMargin?: boolean;
};

const SiteHeader: React.FC<SiteHeaderProps> = ({ isBottomMargin = false }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <header
      className={`relative z-50 w-full bg-white shadow-md ${isBottomMargin ? "mb-10 lg:mb-10`" : "mb-0"}`}
    >
      <nav className="l-container l-max-width">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-4 lg:flex-1">
            <Link
              href="/"
              className="-m-2.5 inline-flex items-center justify-center gap-x-4 rounded-md p-2.5 text-slate-900 hover:text-slate-700"
            >
              <span className="text-xl font-medium">Grid Demo</span>
              {/* <svg
                version="1.1"
                id="folio-logo-full"
                width="371.067"
                height="47.013"
                viewBox="0 0 371.067 47.013"
                className="max-w-[12rem] md:max-w-[14rem]"
              >
                <polygon
                  fill="#CD4829"
                  points="0.034,20.246 0,26.443 39.603,47.013 39.603,40.201 "
                ></polygon>
                <polygon
                  fill="#393A39"
                  points="6.216,23.336 39.603,6.645 39.603,0 0.034,20.246 "
                ></polygon>
                <polygon
                  fill="#CD4829"
                  points="19.042,16.923 32.123,23.166 41.358,18.199 28.634,12.128 "
                ></polygon>
                <polygon
                  fill="#CD4829"
                  points="85.513,20.467 46.11,0 46.11,6.813 79.325,23.591 "
                ></polygon>
                <polygon
                  fill="#393A39"
                  points="46.11,40.369 46.11,47.013 85.513,26.855 85.513,20.467 "
                ></polygon>
                <polygon
                  fill="#CD4829"
                  points="66.67,30.089 53.592,23.848 44.355,28.814 57.078,34.884 "
                ></polygon>
                <path
                  fill="#393A39"
                  d="M116.709,38.547V27.958h-7.185v10.589h-9.583V8.603h9.583V19.19h7.185V8.603h9.583v29.944H116.709z"
                ></path>
                <path
                  fill="#393A39"
                  d="M149.288,27.239h-9.582v3.643h11.739v7.666h-21.322V8.603h21.082l-1.198,7.665h-10.3v4.026h9.582V27.239z"
                ></path>
                <path
                  fill="#393A39"
                  d="M180.671,38.547H170.13l-3.928-8.913h-2.061v8.913h-9.582V8.603h15.092c6.867,0,10.301,3.498,10.301,10.493
            c0,4.791-1.484,7.955-4.457,9.489L180.671,38.547z M164.141,16.268v5.989h2.206c1.15,0,1.986-0.119,2.514-0.359
            c0.525-0.239,0.791-0.792,0.791-1.653v-1.963c0-0.864-0.266-1.414-0.791-1.653c-0.528-0.239-1.364-0.36-2.514-0.36H164.141z"
                ></path>
                <path
                  fill="#393A39"
                  d="M184.025,38.547V8.603h15.522c2.876,0,4.929,0.558,6.157,1.676c1.229,1.118,1.845,2.748,1.845,4.888
            c0,2.142-0.392,3.793-1.173,4.957c-0.783,1.168-1.83,1.928-3.137,2.278v0.289c3.86,0.669,5.795,3.303,5.795,7.905
            c0,2.397-0.641,4.32-1.915,5.774c-1.279,1.45-3.243,2.178-5.896,2.178H184.025z M196.626,15.167h-3.02v4.455h2.972
            c1.212,0,1.82-0.741,1.82-2.227C198.398,15.909,197.806,15.167,196.626,15.167z M197.345,26.616h-3.738v4.891h3.689
            c1.34,0,2.015-0.817,2.015-2.446C199.311,27.429,198.654,26.616,197.345,26.616z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M233.708,16.268h-6.947v22.279h-9.582V16.268h-6.947V8.603h23.477V16.268z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M234.904,23.601c0-5.463,1.021-9.445,3.067-11.956c2.045-2.507,5.734-3.76,11.066-3.76
            c5.336,0,9.025,1.253,11.07,3.76c2.041,2.511,3.064,6.493,3.064,11.956c0,2.711-0.214,4.999-0.647,6.849
            c-0.43,1.856-1.173,3.468-2.226,4.839c-1.055,1.375-2.51,2.383-4.361,3.021c-1.852,0.638-4.152,0.957-6.9,0.957
            c-2.746,0-5.046-0.319-6.897-0.957c-1.854-0.639-3.304-1.646-4.36-3.021c-1.053-1.371-1.797-2.982-2.227-4.839
            C235.122,28.599,234.904,26.312,234.904,23.601z M245.207,18.617v12.458h3.977c1.31,0,2.259-0.149,2.851-0.458
            c0.592-0.301,0.888-0.994,0.888-2.081V16.078h-4.024c-1.28,0-2.215,0.152-2.806,0.456
            C245.501,16.835,245.207,17.533,245.207,18.617z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M290.723,38.547h-10.54l-3.93-8.913h-2.06v8.913h-9.581V8.603h15.09c6.869,0,10.302,3.498,10.302,10.493
            c0,4.791-1.485,7.955-4.456,9.489L290.723,38.547z M274.193,16.268v5.989h2.204c1.15,0,1.987-0.119,2.516-0.359
            c0.525-0.239,0.789-0.792,0.789-1.653v-1.963c0-0.864-0.264-1.414-0.789-1.653c-0.528-0.239-1.365-0.36-2.516-0.36H274.193z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M320.187,38.547h-10.54l-3.929-8.913h-2.06v8.913h-9.581V8.603h15.091c6.867,0,10.3,3.498,10.3,10.493
            c0,4.791-1.482,7.955-4.454,9.489L320.187,38.547z M303.658,16.268v5.989h2.205c1.148,0,1.988-0.119,2.513-0.359
            c0.528-0.239,0.792-0.792,0.792-1.653v-1.963c0-0.864-0.264-1.414-0.792-1.653c-0.524-0.239-1.364-0.36-2.513-0.36H303.658z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M341.747,27.239h-9.582v3.643h11.741v7.666h-21.322V8.603h21.08l-1.197,7.665h-10.302v4.026h9.582V27.239z"
                ></path>
                <path
                  fill="#CD4829"
                  d="M345.82,38.022l1.341-7.908c2.938,0.735,5.58,1.102,7.929,1.102c2.35,0,4.241-0.095,5.679-0.285v-2.395
            l-4.313-0.381c-3.896-0.355-6.571-1.288-8.023-2.806c-1.454-1.52-2.182-3.762-2.182-6.732c0-4.089,0.888-6.9,2.662-8.433
            c1.771-1.534,4.78-2.299,9.031-2.299c4.245,0,8.077,0.398,11.494,1.196l-1.195,7.667c-2.97-0.48-5.352-0.72-7.139-0.72
            c-1.791,0-3.308,0.08-4.553,0.239v2.349l3.45,0.334c4.185,0.417,7.075,1.414,8.673,2.998c1.598,1.58,2.394,3.774,2.394,6.587
            c0,2.013-0.271,3.714-0.813,5.102s-1.19,2.44-1.941,3.163c-0.749,0.719-1.812,1.271-3.184,1.65
            c-1.377,0.385-2.582,0.614-3.619,0.693c-1.038,0.084-2.421,0.123-4.143,0.123C353.213,39.267,349.364,38.851,345.82,38.022z"
                ></path>
              </svg>

              <span className="sr-only">Herb Torres</span> */}
            </Link>
          </div>

          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="sr-only">
                {isNavOpen ? "Close main menu" : "Open main menu"}
              </span>
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>

      <MobileNavigation isOpen={isNavOpen} setIsOpen={setIsNavOpen}>
        <div className="flex h-[75%] flex-col justify-between">
          <ul className="block space-y-8">
            {baseLinks.map((item) => (
              <li
                className="font-regular text-lg text-neutral-900"
                key={item.name}
                onClick={() => setIsNavOpen(false)}
              >
                <Link href={item.href} className="flex items-center gap-x-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />

                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MobileNavigation>
    </header>
  );
};

export default SiteHeader;
