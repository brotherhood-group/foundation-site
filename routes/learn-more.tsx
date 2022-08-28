/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { HeadElement } from "../components/HeadElement.tsx";
import { PageProps } from "$fresh/server.ts";

export default function ApplyNow(ctx: PageProps) {
  return (
    <>
      <HeadElement
        title="Learn More"
        description=""
        url={ctx.url}
      />
      <h2 class={tw`text-5xl font-extrabold sm:text-7xl mb-2`}>
        broth·er·hood
      </h2>
      <p class={tw`block text-lg text-gray-300 sm:text-xl`}></p>

      <p class={tw``}>'brəT͟Hərˌho͝od/</p>
      <p>
        ~ an association, society, or community of people linked by a common
        interest, religion, or trade.
      </p>
    </>
  );
}
