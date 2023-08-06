"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};
export default Providers;
