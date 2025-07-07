// theme.config.jsx

export default {
  logo: (
    <>
      <span style={{ fontWeight: 800, fontSize: "1.2em" }}>LevelApp Docs</span>
    </>
  ),
  search: {
    placeholder: "Search docs...",
  },
  project: {
    link: "https://github.com/www-norma-dev/levelapp-docs",
  },
  chat: {
    link: "https://discord.gg/levelapp",
  },
  feedback: {
    content: "Have suggestions? Let us know →",
    labels: "feedback",
  },
  editLink: {
    content: null,
  },

  docsRepositoryBase: "https://github.com/www-norma-dev/levelapp-docs/",
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
      <div className="flex items-center gap-3 text-sm font-medium">
        <span>LevelApp Docs v1.0 just launched!</span>
        <a
          href="https://github.com/www-norma-dev/levelapp-docs"
          target="_blank"
          rel="noreferrer"
          className="ml-auto rounded bg-black px-3 py-1 text-white hover:bg-gray-800 transition"
        >
          ⭐ Star us on GitHub
        </a>
      </div>
    ),
  },
  footer: {
    content: (
      <div className="text-center text-xs text-gray-500 py-6">
        MIT {new Date().getFullYear()} ©{" "}
        <a
          href="https://github.com/www-norma-dev/levelapp-docs"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-700"
        >
          LevelApp Project
        </a>
        .
      </div>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  toc: {
    float: true,
  },
};
