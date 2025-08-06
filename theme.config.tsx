import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 800, fontSize: "1.2em" }}>LevelApp Docs</span>
    </>
  ),
  search: { placeholder: "Search docs..." },
  project: { link: "https://github.com/www-norma-dev/levelapp-docs" },
  chat: { link: "https://discord.gg/levelapp" },
  feedback: { content: "Have suggestions? Let us know →", labels: "feedback" },
  editLink: { content: null },
  docsRepositoryBase: "https://github.com/www-norma-dev/levelapp-docs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="LevelApp Developer Documentation" />
      <meta property="og:title" content="LevelApp Docs" />
    </>
  ),
  banner: {
    key: "launch-2025",
    content: (
      <div className="flex items-center justify-center gap-3 text-sm font-medium bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4">
        <span>LevelApp Docs v1.0 just launched!</span>
        <Link
          href="https://github.com/www-norma-dev/levelapp-docs"
          target="_blank"
          rel="noreferrer"
          className="ml-auto rounded bg-black px-3 py-1 text-white hover:bg-gray-800 transition"
        >
          ⭐ Star us on GitHub
        </Link>
      </div>
    ),
  },
  footer: {
    content: (
      <div className="w-full text-center text-xs text-gray-500 py-8 border-t border-gray-200">
        <span>
          © {new Date().getFullYear()} MIT —{" "}
          <Link
            href="https://github.com/www-norma-dev/levelapp-docs"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            LevelApp Project
          </Link>
        </span>
      </div>
    ),
  },
  navigation: { prev: true, next: true },
  darkMode: true,
  themeSwitch: {
    useOptions() {
      return { light: "Light", dark: "Dark", system: "System" };
    },
  },
  toc: { float: true },
};

export default config;
