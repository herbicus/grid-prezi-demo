import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const Demo: React.FC = () => {
  return (
    <Main meta={<Meta />}>
      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="col-span-4 lg:col-span-12 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold">demo</h1>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Demo;
