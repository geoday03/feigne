import { Box, Center, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import ShopButton from "lib/components/buttons/ShopButton";
import WishlistButton from "lib/components/buttons/WishlistButton";
import HeaderDrawer from "lib/components/HeaderDrawer";
import Cart from "lib/components/user/Cart";
import React from "react";

export default function MobileBottomNavigation(props: any) {
  return (
    <Flex
      bottom="0"
      w="100%"
      position="sticky"
      overflow="hidden"
      zIndex={100}
      bgColor={useColorModeValue("background.light", "background.dark")}
      boxShadow="xs"
      {...props}
    >
      <Spacer />
      <Center mx="auto" px="5px" gap="1rem">
        <HeaderDrawer px="10px" />
        <ShopButton px="10px" />
        <WishlistButton h="100%" px="10px" />
        <Cart rounded="md" />
      </Center>
      <Spacer />
    </Flex>
  );
}
