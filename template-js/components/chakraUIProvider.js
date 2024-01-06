// app/providers.tsx
'use client';

// import { CacheProvider } from '@chakra-ui/next-js';
import { CacheProvider } from '@chakra-ui-next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function ChakraUIProvider({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
    
  );
}
