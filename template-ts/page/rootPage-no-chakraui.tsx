export default function Home() {
  return (
    <main className="relative w-full min-h-screen p-24 flex flex-col gap-8 items-center justify-start">
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-end justify-center">
        <h1 className="text-3xl">
          Hello 👋 I&apos;m a NextJS 13 TypeScript Template
        </h1>
        <div className="px-4 py-2 bg-slate-50 opacity-70 rounded-lg">
          <a
            href="https://xmliszt.github.io/"
            target="_blank"
            className="no-underline"
          >
            by Li Yuxuan
          </a>
        </div>
      </div>
      <section className="flex justify-center w-4/5 mt-6">
        <ul className="flex flex-col gap-2">
          <li>
            A{" "}
            <a
              color="purple.600"
              href="https://nextjs.org/docs"
              target="_blank"
            >
              Next 13 (App Router)
            </a>{" "}
            template with{" "}
            <a
              color="purple.600"
              href="https://tailwindcss.com"
              target="_blank"
            >
              TailwindCSS
            </a>
            , and{" "}
            <a color="purple.600" href="https://eslint.org" target="_blank">
              ESLint
            </a>
          </li>
          <li>
            Progressive Web App (PWA) enabled (with{" "}
            <a
              color="purple.600"
              href="https://github.com/shadowwalker/next-pwa"
              target="_blank"
            >
              next-pwa
            </a>
            )
          </li>
          <li>
            Search Engine Optimization (SEO) in-built (with{" "}
            <a
              color="purple.600"
              href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
              target="_blank"
            >
              NextJS Metadata
            </a>
            )
          </li>
          <li>MIT License template included</li>
          <li>
            Optional convenient third-party libraries such as:{" "}
            <a
              color="purple.600"
              href="https://react-icons.github.io/react-icons"
              target="_blank"
            >
              React Icons
            </a>
            ,{" "}
            <a
              color="purple.600"
              href="https://next-auth.js.org/getting-started/introduction"
              target="_blank"
            >
              NextAuth.js
            </a>
            ,{" "}
            <a color="purple.600" href="https://lodash.com" target="_blank">
              Lodash
            </a>
            ,{" "}
            <a color="purple.600" href="https://momentjs.com" target="_blank">
              Moment.js
            </a>{" "}
            pre-installed
          </li>
          <li>
            You can choose to install testing frameworks like:{" "}
            <a color="purple.600" href="https://jestjs.io" target="_blank">
              Jest
            </a>{" "}
            and{" "}
            <a color="purple.600" href="https://playwright.dev" target="_blank">
              Playwright
            </a>
          </li>
          <li>
            You can choose to support markdown files with{" "}
            <a
              color="purple.600"
              href="https://github.com/remarkjs/react-markdown"
              target="_blank"
            >
              React-Markdown
            </a>
          </li>
          <li>
            Optional linters and formatters:{" "}
            <a color="purple.600" href="https://stylelint.io" target="_blank">
              Stylelint
            </a>
            ,{" "}
            <a color="purple.600" href="https://prettier.io" target="_blank">
              Prettier
            </a>
          </li>
          <li>
            <a
              color="purple.600"
              href="https://typicode.github.io/husky/"
              target="_blank"
            >
              Husky
            </a>{" "}
            can be installed for adding git hooks to your project
          </li>
          <li>
            The template is yours! Feel free to remove / modify any
            pre-installed packages to suit your own needs!
          </li>
        </ul>
      </section>
      <div className="rounded-lg px-2 py-1 bg-white text-slate-800 border-b-2 border-gray-900 opacity-50">
        <code>Happy Hacking!</code>
      </div>
    </main>
  );
}
