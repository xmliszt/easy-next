"use client";

import { CheckCircle, InfoRounded, Help } from "@mui/icons-material";
import {
  Button,
  Chip,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen p-24 flex flex-col gap-8 items-center justify-start">
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-end justify-center">
        <Typography variant="h5">
          Hello 👋 I&apos;m a NextJS 13 TypeScript Template
        </Typography>
        <Link
          underline="hover"
          href="https://xmliszt.github.io/"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <Button variant="contained">by Li Yuxuan</Button>
        </Link>
      </div>
      <section className="flex justify-center w-4/5 mt-6">
        <List dense={false}>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            A
            <Link
              className="mx-2"
              href="https://nextjs.org/docs"
              target="_blank"
              underline="hover"
            >
              Next 13 (App Router)
            </Link>
            template with
            <Link
              className="mx-2"
              href="https://tailwindcss.com"
              target="_blank"
              underline="hover"
            >
              TailwindCSS
            </Link>
            ,
            <Link
              className="mx-2"
              href="https://chakra-ui.com"
              target="_blank"
              underline="hover"
            >
              ChakraUI
            </Link>
            , and
            <Link
              className="mx-2"
              href="https://eslint.org"
              target="_blank"
              underline="hover"
            >
              ESLint
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            Progressive Web App (PWA) enabled (with
            <Link
              className="mx-2"
              href="https://github.com/shadowwalker/next-pwa"
              target="_blank"
              underline="hover"
            >
              next-pwa
            </Link>
            )
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            Search Engine Optimization (SEO) in-built (with
            <Link
              className="mx-2"
              href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
              target="_blank"
              underline="hover"
            >
              NextJS Metadata
            </Link>
            )
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            MIT License template included
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            Optional convenient third-party libraries such as:
            <Link
              className="mx-2"
              href="https://react-icons.github.io/react-icons"
              target="_blank"
              underline="hover"
            >
              React Icons
            </Link>
            ,
            <Link
              className="mx-2"
              href="https://next-auth.js.org/getting-started/introduction"
              target="_blank"
              underline="hover"
            >
              NextAuth.js
            </Link>
            ,
            <Link
              className="mx-2"
              href="https://lodash.com"
              target="_blank"
              underline="hover"
            >
              Lodash
            </Link>
            ,
            <Link
              className="mx-2"
              href="https://momentjs.com"
              target="_blank"
              underline="hover"
            >
              Moment.js
            </Link>
            pre-installed
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            You can choose to install testing frameworks like:{" "}
            <Link
              className="mx-2"
              href="https://jestjs.io"
              target="_blank"
              underline="hover"
            >
              Jest
            </Link>
            and
            <Link
              className="mx-2"
              href="https://playwright.dev"
              target="_blank"
              underline="hover"
            >
              Playwright
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            You can choose to support markdown files with
            <Link
              className="mx-2"
              href="https://github.com/remarkjs/react-markdown"
              target="_blank"
              underline="hover"
            >
              React-Markdown
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            Optional linters and formatters:
            <Link
              className="mx-2"
              href="https://stylelint.io"
              target="_blank"
              underline="hover"
            >
              Stylelint
            </Link>
            ,
            <Link
              className="mx-2"
              href="https://prettier.io"
              target="_blank"
              underline="hover"
            >
              Prettier
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Help color="info" />
            </ListItemIcon>
            <Link
              className="mx-2"
              href="https://typicode.github.io/husky/"
              target="_blank"
              underline="hover"
            >
              Husky
            </Link>
            can be installed for adding git hooks to your project
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoRounded color="secondary" />
            </ListItemIcon>
            The template is yours! Feel free to remove / modify any
            pre-installed packages to suit your own needs!
          </ListItem>
        </List>
      </section>
      <Chip variant="outlined" label="Happy Hacking!" />
    </main>
  );
}
