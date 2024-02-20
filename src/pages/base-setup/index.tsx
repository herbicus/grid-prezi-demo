import React, { useEffect, useState, useRef } from "react";
import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";

const BaseSetup: React.FC = () => {
  const [divWidth, setDivWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDivWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
      }
    };

    updateDivWidth();

    window.addEventListener("resize", updateDivWidth);

    return () => window.removeEventListener("resize", updateDivWidth);
  }, []);

  return (
    <Main meta={<Meta />}>
      <section className="l-container l-max-width" ref={divRef}>
        {" "}
        {/* Assign ref here */}
        <span className="block text-center bg-indigo-200">
          1440px max width
        </span>
        <span className="block text-center bg-indigo-200">
          Actual Width: {divWidth}px
        </span>
        <span className="block lg:hidden text-center bg-indigo-200">
          16px left & right padding
        </span>
        <span className="hidden lg:block text-center bg-indigo-200">
          32px left and right padding
        </span>
      </section>

      <section className="l-container l-max-width">
        <div className="l-grid">
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">1</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">2</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">3</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">4</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">5</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">6</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">7</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">8</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">9</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">10</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">11</div>
          <div className="l-grid__col l-grid__col--demo l-grid__col--1">12</div>
        </div>
      </section>
    </Main>
  );
};

export default BaseSetup;
