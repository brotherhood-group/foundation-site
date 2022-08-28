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
        title="Apply Now"
        description=""
        url={ctx.url}
      />
      <section
        class={tw`w-full pt-5 pb-8 bg-black bg-cover lg:pb-32`}
      >
        <div
          class={tw`max-w-2xl px-8 pb-10 mx-auto space-y-8 text-white md:max-w-5xl lg:px-5 xl:px-0`}
        >
          <h1 class={tw`text-5xl font-extrabold sm:text-7xl mb-2`}>
            broth·er·hood
          </h1>
          <p class={tw`block text-lg text-gray-300 sm:text-xl`}></p>
          <div class={tw``}>
            <div class={tw``}>'brəT͟Hərˌho͝od/</div>
            <div class={tw``}></div>
          </div>~ an association, society, or community of people linked by a
          common interest, religion, or trade.<p></p>
          <div class={tw`w-full`}>
            <a
              href="/apply-now"
              class={tw`inline-block w-full px-8 py-5 mb-6 text-2xl bg-indigo-700 sm:mb-0 sm:w-auto hover:bg-indigo-600 rounded-xl`}
              data-rounded="rounded-xl"
              data-primary="indigo-600"
            >
              Apply to Join
            </a>
            <a
              href="/learn-more"
              class={tw`inline-block w-full px-8 py-5 text-2xl bg-gray-800 sm:w-auto sm:ml-4 hover:bg-gray-700 rounded-xl`}
              data-rounded="rounded-xl"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          class={tw`w-full max-w-2xl px-8 mx-auto md:max-w-3xl lg:max-w-6xl lg:px-5`}
        >
          <img
            src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            class={tw` w-full transform lg:pr-10`}
          />
        </div>
      </section>
    </>
  );
}
