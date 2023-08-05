"use client";
import { Container } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return <Container maxWidth="container.lg">{children}</Container>;
};
export default HomeLayout;
