"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

import BaseLayout from "@/ui/base-layout";

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="ja">
      <body>
        <CacheProvider>
          <ChakraProvider>
            <BaseLayout>{children}</BaseLayout>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
