/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const YtPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const DemoFixedHeight: React.FC = () => {
  const { basePath } = useRouter();
  return (
    <Main meta={<Meta />}>
      <section className="w-full max-w-full h-[500px] relative overflow-hidden">
        <div className="l-container l-max-width h-full flex flex-col items-start justify-end z-20 pb-10 lg:pb-20">
          <h1 className="text-3xl lg:text-6xl font-bold text-white relative z-20">
            Lorem Ipusm
          </h1>
        </div>

        {/* <Image
          src={`${basePath}/prezi-demo-hero-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
          alt=""
          role="presentation"
          fill
        /> */}
        <img
          src={`${basePath}/prezi-demo-hero-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
          alt=""
          role="presentation"
        />
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid z-20">
          <div className="col-span-4 lg:col-span-7">
            <div className="block mb-6">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Lorem ipsum dolor sit amet
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="col-span-4">
            {/* <Image
              src={`${basePath}/prezi-demo-image-1.png`}
              className=""
              alt=""
              role="presentation"
              width={902}
              height={698}
            /> */}
            <img
              src={`${basePath}/prezi-demo-image-1.png`}
              className=""
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid z-20">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-4 lg:col-span-8 text-center">
            <div className="block mb-6 text-center">
              <h1 className="text-2xl lg:text-4xl font-bold">Lorem Ipusm</h1>
              <p>Lorem ipusm Dolor sit amet</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <YtPlayer
                url="https://www.youtube.com/watch?v=5Ulg-Hb13X4&ab_channel=HISTORY"
                className="absolute inset-0 !w-full !h-full object-full"
              />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="col-span-4 lg:col-span-12 text-center">
            <hr />
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="col-span-4 text-center">
            <h5 className="mb-4 text-xl font-semibold">Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiAdunt ut labore et dolore magna aliqua elit.
            </p>
          </div>

          <div className="col-span-4 text-center">
            <h5 className="mb-4 text-xl font-semibold">Sed Ut Perspiciatis</h5>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className="col-span-4 text-center">
            <h5 className="mb-4 text-xl font-semibold">Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiAdunt ut labore et dolore magna aliqua elit.
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default DemoFixedHeight;
