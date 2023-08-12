import {
  CheckCircledIcon,
  QuestionMarkCircledIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Button, Code, Flex, Heading, Link } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen p-24 flex flex-col gap-8 items-center justify-start">
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-end justify-center">
        <Heading>Hello 👋 I&apos;m a NextJS 13 TypeScript Template</Heading>
        <Button color="tomato" variant="soft">
          <a
            href="https://xmliszt.github.io/"
            target="_blank"
            className="no-underline"
          >
            by Li Yuxuan
          </a>
        </Button>
      </div>
      <Flex direction="column" justify="center" align="start" gap="4">
        <Flex gap="2" align="center">
          <CheckCircledIcon color="green" />
          <div>
            A{" "}
            <Link href="https://nextjs.org/docs" target="_blank">
              Next 13 (App Router)
            </Link>{" "}
            template with{" "}
            <Link href="https://tailwindcss.com" target="_blank">
              TailwindCSS
            </Link>
            , and{" "}
            <Link href="https://eslint.org" target="_blank">
              ESLint
            </Link>
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <CheckCircledIcon color="green" />
          <div>
            Progressive Web App (PWA) enabled (with{" "}
            <Link
              href="https://github.com/shadowwalker/next-pwa"
              target="_blank"
            >
              next-pwa
            </Link>
            )
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <CheckCircledIcon color="green" />
          <div>
            Search Engine Optimization (SEO) in-built (with{" "}
            <Link
              href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
              target="_blank"
            >
              NextJS Metadata
            </Link>
            )
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <CheckCircledIcon color="green" />
          <div>MIT License template included</div>
        </Flex>
        <Flex gap="2" align="center">
          <QuestionMarkCircledIcon color="orange" />
          <div>
            Optional convenient third-party libraries such as:{" "}
            <Link
              href="https://react-icons.github.io/react-icons"
              target="_blank"
            >
              React Icons
            </Link>
            ,{" "}
            <Link
              href="https://next-auth.js.org/getting-started/introduction"
              target="_blank"
            >
              NextAuth.js
            </Link>
            ,{" "}
            <Link href="https://lodash.com" target="_blank">
              Lodash
            </Link>
            ,{" "}
            <Link href="https://momentjs.com" target="_blank">
              Moment.js
            </Link>{" "}
            pre-installed
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <QuestionMarkCircledIcon color="orange" />
          <div>
            You can choose to install testing frameworks like:{" "}
            <Link href="https://jestjs.io" target="_blank">
              Jest
            </Link>{" "}
            and{" "}
            <Link href="https://playwright.dev" target="_blank">
              Playwright
            </Link>
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <QuestionMarkCircledIcon color="orange" />
          <div>
            You can choose to support markdown files with{" "}
            <Link
              href="https://github.com/remarkjs/react-markdown"
              target="_blank"
            >
              React-Markdown
            </Link>
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <QuestionMarkCircledIcon color="orange" />
          <div>
            Optional linters and formatters:{" "}
            <Link href="https://stylelint.io" target="_blank">
              Stylelint
            </Link>
            ,{" "}
            <Link href="https://prettier.io" target="_blank">
              Prettier
            </Link>
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <QuestionMarkCircledIcon color="orange" />
          <div>
            <Link href="https://typicode.github.io/husky/" target="_blank">
              Husky
            </Link>{" "}
            can be installed for adding git hooks to your project
          </div>
        </Flex>
        <Flex gap="2" align="center">
          <InfoCircledIcon color="white" />
          <div>
            The template is yours! Feel free to remove / modify any
            pre-installed packages to suit your own needs!
          </div>
        </Flex>
      </Flex>
      <Code>Happy Hacking!</Code>
    </main>
  );
}
