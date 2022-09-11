/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { apply, tw } from "@twind";
import { css } from "twind/css";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export function HeadElement({ description, image, title, url }: HeadProps) {
  css({
    h1:
      apply`text(uppercase 5xl md:7xl) font(extrabold serif) my(2 md:4) leading-none`,
    h2: apply`text-5xl font(extrabold) my(2 md:4)`,
    h3: apply`text-4xl font(extrabold mono) my(1 md:2)`,
  });
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Crete+Round&amp;family=Oswald:wght@200;400&amp;display=swap"
        rel="stylesheet"
      >
      </link>
    </Head>
  );
}
