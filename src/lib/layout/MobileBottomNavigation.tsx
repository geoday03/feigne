import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ShopLink from "lib/components/buttons/ShopLink";
import HeaderDrawer from "lib/components/HeaderDrawer";
import React from "react";

export default function MobileBottomNavigation(props: any) {
  return (
    <Flex
      bottom="0"
      w="100%"
      position="fixed"
      zIndex={100}
      bgColor={useColorModeValue("background.light", "background.dark")}
      {...props}
    >
      <Box mx="auto" gap={2} p="5px">
        <HeaderDrawer />
        <ShopLink />
      </Box>
    </Flex>
  );
}
