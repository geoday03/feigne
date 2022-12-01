import {
  createIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import HR from "./HR";

export default function Cart() {
  const ShoppingCartIcon = createIcon({
    displayName: "ShoppingCartIcon",
    viewBox: "0 0 48 48",
    path: (
      <path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4-5.5-11.4H37.9l-6.25 11.4Z" />
    ),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button
        size="lg"
        ref={btnRef}
        color="text.dark"
        backgroundColor="cart.green"
        leftIcon={<ShoppingCartIcon boxSize="24px" fill="text.dark" />}
        onClick={onOpen}
      >
        <Text fontSize="15px" fontWeight="600"></Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex direction="column">
              <DrawerCloseButton
                mr="87%"
                mt="5px"
                alignSelf="center"
                size="lg"
              />
              <Text mt="4rem">Cart</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <hr />

            <Box></Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              backgroundColor="brand.primary"
              color="text.dark"
              width="100%"
              size="lg"
              borderRadius="7px"
              onClick={() => {}}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
