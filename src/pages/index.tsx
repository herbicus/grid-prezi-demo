import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const HomePage: React.FC = () => {
  return (
    <Main meta={<Meta />}>
      <section>section</section>
      <section>Section 2</section>
    </Main>
  );
};

export default HomePage;
