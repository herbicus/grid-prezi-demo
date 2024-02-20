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

const Demo: React.FC = () => {
  const { basePath } = useRouter();
  return (
    <Main meta={<Meta />}>
      <section className="aspect-w-16 aspect-h-9 overflow-hidden">
        <div className="l-container l-max-width h-full flex flex-col items-start justify-end z-20 pb-10 lg:pb-20">
          <h1 className="text-3xl lg:text-6xl font-bold text-white">
            Lorem Ipusm
          </h1>
        </div>

        <img
          src={`${basePath}/pezi-demo-hero-bg.png`}
          className="absoluste inset-0 w-full h-full object-cover z-10 pointer-events-none"
          alt=""
          role="presentation"
        />
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="col-span-4 lg:col-span-12 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold">demo</h1>
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid z-20">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-4 lg:col-span-8 text-center">
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
    </Main>
  );
};

export default Demo;
