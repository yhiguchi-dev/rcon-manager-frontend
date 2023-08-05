"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  // const CSR = dynamic(async () => await import("@/ui/csr"), {
  //   ssr: false,
  // });
  return (
    <html lang="ja">
      <body>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
