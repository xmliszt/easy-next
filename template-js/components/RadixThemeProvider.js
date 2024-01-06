"use client";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export function RadixThemeProvider({ children }) {
  return <Theme>{children}</Theme>;
}
