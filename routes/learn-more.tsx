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
    </>
  );
}
