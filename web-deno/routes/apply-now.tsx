/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { HeadElement } from "../components/HeadElement.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

import { subscriptions } from "../services/cms.ts";

interface Applicant {
  email: string;
  first_name: string;
  last_name: string;
}

export const handler: Handlers<Applicant> = {
  POST(req, ctx) {
    const results = subscriptions.readByQuery({ limit: -1 });
    return ctx.render({ results });
  },
};

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
          common interest, religion, or trade.
          <div class={tw`w-full`}>
            <form>
              <input type="text" name="email" value={email} />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
