/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { render } from "gfm";

export function Content(props: { children: string }) {
  const content = render(props.children);

  return (
    <div
      class={tw`mx-auto w-full max-w-xl my-1`}
      dangerouslySetInnerHTML={{ __html: content }}
    >
    </div>
  );
}
