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
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import CartItem from "./CartItem";
import HR from "../HR";
import CartIcon from "lib/Icons/CartIcon";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { CartItemConfig } from "lib/types/cart-item-config";
import { nanoid } from "@reduxjs/toolkit";

export default function Cart(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);

  const cart = useAppSelector((state) => state.cartSlice);

  const { colorMode } = useColorMode();

  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <Button
        variant="solid"
        size="lg"
        ref={btnRef}
        rounded="full"
        color="text.dark"
        colorScheme={
          cart.items.length > 0
            ? "green"
            : colorMode == "light"
            ? "blackAlpha"
            : "gray"
        }
        backgroundColor={
          cart.items.length > 0
            ? "cart.green"
            : colorMode == "light"
            ? "gray.900"
            : "gray.700"
        }
        leftIcon={<CartIcon boxSize="24px" fill="text.dark" />}
        onClick={onOpen}
        p="1rem"
        {...props}
      >
        <Text fontSize="15px" fontWeight="600">
          {cart.items.length}
        </Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xl", md: "md" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex direction="column">
              <DrawerCloseButton mt="5px" alignSelf="center" size="lg" />
              <Text mt="4rem">Cart</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody w="100%">
            <HR mb="1rem" />
            {cart.items.length > 0 ? (
              cart.items.map((item: CartItemConfig, i: number) => (
                <Box key={nanoid()}>
                  {
                    <CartItem
                      key={nanoid()}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                    />
                  }

                  <HR mb="15px" />
                </Box>
              ))
            ) : (
              <Box />
            )}
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
