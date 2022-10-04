import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box maxW="100%" overflow="clip">
      <Header />

      <Box
        as="main"
        margin="auto auto"
        width={1500}
        p="0"
        m="0"
        transition="0.5s ease-out"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
