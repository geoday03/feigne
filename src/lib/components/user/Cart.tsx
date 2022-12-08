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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import HR from "../HR";
import CartIcon from "lib/Icons/CartIcon";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { CartItemConfig } from "lib/types/cart-item-config";

export default function Cart(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);

  const cart = useAppSelector((state) => state);

  const [itemCount, setItemCount] = React.useState(0);

  useEffect(() => {
    setItemCount(cart.items.length);
  }, [cart.items.length]);

  return (
    <>
      <Button
        variant="solid"
        size="lg"
        ref={btnRef}
        rounded="full"
        color="text.dark"
        colorScheme="green"
        backgroundColor={cart.items.length > 0 ? "cart.green" : "gray.900"}
        leftIcon={<CartIcon boxSize="24px" fill="text.dark" />}
        onClick={onOpen}
        p="1rem"
        {...props}
      >
        <Text fontSize="15px" fontWeight="600">
          {itemCount}
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

          <DrawerBody>
            <HR />
            {cart.items.length > 0 ? (
              cart.items.map((item: CartItemConfig, i: number) => (
                <Box>
                  <CartItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                  />
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
