import { Metadata } from 'next';
import { ChakraUIProvider } from './chakraUIProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS template by Li Yuxuan',
  description: 'NextJS | TailwindCSS | ChakraUI template by Li Yuxuan',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'NextJS template by Li Yuxuan',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
