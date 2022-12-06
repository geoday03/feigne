import { Box, Center, Flex, useColorModeValue } from "@chakra-ui/react";
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
      position="fixed"
      zIndex={100}
      bgColor={useColorModeValue("background.light", "background.dark")}
      boxShadow="base"
      {...props}
    >
      <Center mx="auto" p="5px" gap="1rem">
        <HeaderDrawer h="50px" />
        <ShopButton h="50px" />
        <WishlistButton h="50px" />
        <Cart rounded="md" ml="auto" h="50px" />
      </Center>
    </Flex>
  );
}
