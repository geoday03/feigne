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
      color="text.light"
      _hover={{
        bgGradient: "linear(to-l, #e65757, #eb0076)",
      }}
      _active={{
        bgGradient: "linear(to-l, brand.primary, brand.primary)",
      }}
    >
      {children}
    </Button>
  );
}
