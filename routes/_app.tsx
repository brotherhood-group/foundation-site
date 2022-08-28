/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { tw } from "@twind";

export default function App({ Component }: AppProps) {
  return (
    <>
      <body
        class={tw`text-base text-white bg-black font-sans flex flex-col h-screen justify-between`}
      >
        <Header />
        <Component />
        <Footer />
      </body>
    </>
  );
}
