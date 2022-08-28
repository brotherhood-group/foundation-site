/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { HeadElement } from "../components/HeadElement.tsx";
import { PageProps } from "$fresh/server.ts";
import { Content } from "../components/Content.tsx";

export default function AboutUs(ctx: PageProps) {
  return (
    <>
      <HeadElement
        title="About Us"
        description=""
        url={ctx.url}
      />
      <Content>
        # Some Text
      </Content>
    </>
  );
}
