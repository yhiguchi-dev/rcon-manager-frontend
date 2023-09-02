import "./globals.css";
import { Inter } from "next/font/google";
import { type ReactElement, type ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="ja" className={inter.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
