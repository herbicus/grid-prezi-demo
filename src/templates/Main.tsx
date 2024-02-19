import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteNavigation/SiteHeader";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { meta, children } = props;

  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      {meta && meta}
      {/* <header className="shadow-md mb-10">
        <nav className="l-section l-max-width">
          <div className="flex h-16 w-full items-center justify-between">
            <span className="block text-center font-bold text-xl">
              Lorem Ipusm
            </span>
          </div>
        </nav>
      </header> */}
      <SiteHeader />

      <main className="text-base block space-y-10 lg:space-y-20">
        {children}
      </main>
    </div>
  );
};

export { Main };
