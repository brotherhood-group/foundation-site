/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Logo } from "./Logo.tsx";

export const pages = [
  { url: "/", title: "Home" },
  { url: "/apply-now", title: "Apply Now" },
  { url: "/learn-more", title: "Learn More" },
  { url: "/about-us", title: "About Us" },
];

export function Header() {
  return (
    <header class={tw`w-full bg-gray-900`}>
      <div
        class={tw`mx-auto flex max-w-7xl items-center py-1 justify-between`}
      >
        <div class={tw`flex items-center space-x-2 p-4`}>
          <button
            class={tw`flex p-1`}
          >
            <div
              class={tw`flex w-5 h-5 relative justify-center items-start space-y-1 flex-col`}
            >
              <span
                id="bar1"
                class="w-full h-0.5 transition-all duration-300 rounded-full bg-white"
              >
              </span>
              <span
                id="bar2"
                class="w-5/6 h-0.5 transition-all duration-300 rounded-full bg-white"
              >
              </span>
              <span
                id="bar3"
                class="w-full h-0.5 transition-all duration-300 rounded-full bg-white"
              >
              </span>
            </div>
          </button>
          <Logo />
        </div>
        <nav
          id="nav"
          class={tw`md:relative md:w-auto w-full md:mt-0 mt-16 translate-y-2 md:translate-y-0 top-0 md:pb-0 pb-3 bg-gray-900 md:bg-transparent absolute items-center md:space-x-2 text-sm font-medium text-gray-300 md:flex hidden`}
        >
          {pages.map((i) => (
            <a
              href={i.url}
              class={tw`md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full`}
            >
              {i.title}
            </a>
          ))}
        </nav>
        <div
          class={tw`flex items-center space-x-2 text-sm pr-4 font-medium text-gray-800`}
        >
          <a
            href="#_"
            class={tw`inline rounded bg-gray-900 px-3 py-2 text-gray-300 hover:text-gray-200 transition hover:bg-gray-800`}
          >
            Login
          </a>
          <a
            href="#_"
            class={tw`rounded bg-purple-600 px-3 py-2 text-white transition hover:bg-purple-500`}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
