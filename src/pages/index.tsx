/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const HomePage: React.FC = () => {
  const { basePath } = useRouter();
  return (
    <Main meta={<Meta />} isBottomMargin>
      <section className="l-container l-max-width flex relative items-center justify-center h-[calc(100vh-14rem)] lg:h-[calc(100vh-19rem)]">
        <div className="l-grid relative z-20">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-4 lg:col-span-8 text-center">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Responsive Web Design with Grid Layouts
            </h1>
          </div>

          <div className="hidden lg:block lg:col-span-2" />
        </div>

        <img
          src={`${basePath}/prezi-demo-bg.png`}
          className="absolute left-0 -top-10 lg:-top-20 w-full h-[calc(100vh-9rem)] object-cover z-10 pointer-events-none opacity-30"
          alt=""
          role="presentation"
        />
      </section>
    </Main>
  );
};

export default HomePage;
