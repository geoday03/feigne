import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function BrandedButton({ children }: LayoutProps) {
  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );

  return (
    <Button
      w="100%"
      bgGradient="linear(to-l, brand.primary, #FF0080)"
      mb="10px"
      rounded="xl"
      color="text.dark"
      _hover={{
        bgGradient: "linear(to-l, #d65454, #c70064)",
      }}
    >
      {children}
    </Button>
  );
}
