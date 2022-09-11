/** @jsx h */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { tw } from "@twind";

export default function App({ Component }: AppProps) {
  return (
    <body
      class={tw`flex flex-col h-screen justify-between bg-gray-900 text(base white)`}
    >
      <Header />
      <Component />
      <Footer />
    </body>
  );
}
