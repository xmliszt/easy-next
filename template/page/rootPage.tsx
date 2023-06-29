'use client';

import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { Link, List, ListIcon, ListItem, Tag, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <main className='relative w-full min-h-screen p-24'>
      <div className='flex flex-col lg:flex-row gap-2 items-center lg:items-end justify-center'>
        <Text fontSize='2xl' align='center'>
          Hello 👋 I am a NextJS 13 Template
        </Text>
        <Tag>
          <Link href='https://xmliszt.github.io/' target='_blank'>
            by Li Yuxuan
          </Link>
        </Tag>
      </div>
      <section className='flex justify-center w-4/5 mt-6'>
        <List spacing={3} className=''>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />A{' '}
            <Link
              color='purple.600'
              href='https://nextjs.org/docs'
              target='_blank'
            >
              Next 13 (App Directory)
            </Link>{' '}
            template with{' '}
            <Link
              color='purple.600'
              href='https://tailwindcss.com'
              target='_blank'
            >
              TailwindCSS
            </Link>
            ,{' '}
            <Link
              color='purple.600'
              href='https://chakra-ui.com'
              target='_blank'
            >
              ChakraUI
            </Link>
            , and{' '}
            <Link color='purple.600' href='https://eslint.org' target='_blank'>
              ESLint
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Progressive Web App (PWA) enabled (with{' '}
            <Link
              color='purple.600'
              href='https://github.com/shadowwalker/next-pwa'
              target='_blank'
            >
              next-pwa
            </Link>
            )
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Search Engine Optimization (SEO) in-built (with{' '}
            <Link
              color='purple.600'
              href='https://nextjs.org/docs/app/building-your-application/optimizing/metadata'
              target='_blank'
            >
              NextJS Metadata
            </Link>
            )
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Optional convenient third-party libraries such as:{' '}
            <Link
              color='purple.600'
              href='https://react-icons.github.io/react-icons'
              target='_blank'
            >
              React Icons
            </Link>
            ,{' '}
            <Link
              color='purple.600'
              href='https://next-auth.js.org/getting-started/introduction'
              target='_blank'
            >
              NextAuth.js
            </Link>
            ,{' '}
            <Link color='purple.600' href='https://lodash.com' target='_blank'>
              Lodash
            </Link>
            ,{' '}
            <Link
              color='purple.600'
              href='https://momentjs.com'
              target='_blank'
            >
              Moment.js
            </Link>{' '}
            pre-installed
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            You can choose to install testing frameworks like:{' '}
            <Link color='purple.600' href='https://jestjs.io' target='_blank'>
              Jest
            </Link>{' '}
            and{' '}
            <Link
              color='purple.600'
              href='https://playwright.dev'
              target='_blank'
            >
              Playwright
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            You can choose to support markdown files with{' '}
            <Link
              color='purple.600'
              href='https://github.com/remarkjs/react-markdown'
              target='_blank'
            >
              React-Markdown
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Optional linters and formatters:{' '}
            <Link
              color='purple.600'
              href='https://stylelint.io'
              target='_blank'
            >
              Stylelint
            </Link>
            ,{' '}
            <Link color='purple.600' href='https://prettier.io' target='_blank'>
              Prettier
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            <Link
              color='purple.600'
              href='https://typicode.github.io/husky/'
              target='_blank'
            >
              Husky
            </Link>{' '}
            can be installed for adding git hooks to your project
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            MIT License
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='yellow.500' />
            The template is yours! Feel free to remove / modify any
            pre-installed packages to suit your own needs!
          </ListItem>
        </List>
      </section>
    </main>
  );
}
