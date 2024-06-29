import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Noto_Sans, Nunito_Sans } from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextUIProvider className={`${noto.variable} ${nunito.variable}`}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}
