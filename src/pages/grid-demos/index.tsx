import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const GridDemos: React.FC = () => {
  return (
    <Main meta={<Meta />} isBottomMargin>
      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo col-span-1">1</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">2</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">3</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">4</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">5</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">6</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">7</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">8</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">9</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">10</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">11</div>
          <div className="l-grid__col l-grid__col--demo col-span-1">12</div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-12">
            12
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-2 lg:col-span-6">
            <span className="block lg:hidden text-center">2</span>
            <span className="hidden lg:block text-center">6</span>
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-2 lg:col-span-6">
            <span className="block lg:hidden text-center">2</span>
            <span className="hidden lg:block text-center">6</span>
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4">4</div>
          <div className="l-grid__col l-grid__col--demo col-span-4">4</div>
          <div className="l-grid__col l-grid__col--demo col-span-4">4</div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3">
            3
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3">
            3
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3">
            3
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3">
            3
          </div>

          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--2">2</div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3">
            Sidebar
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-1 spaner">
            span
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-4 l-grid__col--8">
            Content
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-7">
            Content
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-1 spaner">
            span
          </div>
          <div className="l-grid__col l-grid__col--demo col-span-4">
            Aside Content
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo col-span-1 spaner">
            span
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-10">
            Span 10 Offset 1
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-1 spaner">
            span
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo l-grid__col--2 spaner">
            span
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-8">
            Span 8 Offset 2
          </div>

          <div className="l-grid__col l-grid__col--demo l-grid__col--2 spaner">
            span
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3 spaner">
            span
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-6">
            Span 6 Offset 3
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-3 spaner">
            span
          </div>
        </div>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo l-grid__col--2 spaner">
            span
          </div>

          <div className="l-grid__col l-grid__col--demo col-span-4 lg:col-span-8">
            <h2 className="text-xl mb-2 lg:text-3xl font-bold">
              Lorem Ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="l-grid__col l-grid__col--demo l-grid__col--2 spaner">
            span
          </div>
        </div>
      </section>

      {/* <section
        className="l-container"
        style="max-width:896px;border:1px solid #1d1d1d;text-align:center;padding-bottom:16px;padding-top:16px"
      >
        <h2>Lorem Ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section> */}
    </Main>
  );
};

export default GridDemos;
