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
import HR from "../HR";
import CartIcon from "lib/Icons/CartIcon";

export default function Cart(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button
        variant="solid"
        size="lg"
        ref={btnRef}
        rounded="full"
        color="text.dark"
        colorScheme="green"
        backgroundColor="cart.green"
        leftIcon={<CartIcon boxSize="24px" fill="text.dark" />}
        onClick={onOpen}
        p="1rem"
        {...props}
      >
        <Text fontSize="15px" fontWeight="600">
          0
        </Text>
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
              colorScheme="red"
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
