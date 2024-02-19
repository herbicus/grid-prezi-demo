import "@/app/globals.css";
import "@/app/main.scss";

import type { Metadata } from "next";

// import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';

import type { AppProps } from "next/app";

const DemoPrezi = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default DemoPrezi;
