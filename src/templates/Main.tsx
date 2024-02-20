import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteNavigation/SiteHeader";
import SiteFooter from "@/components/SiteNavigation/SiteFooter";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { meta, children } = props;

  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      {meta && meta}

      <SiteHeader />

      <main className="text-base block space-y-10 lg:space-y-20">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
};

export { Main };
