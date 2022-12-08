import {
  Box,
  Center,
  Flex,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "lib/app/hooks";
import LockIcon from "lib/Icons/LockIcon";
import { CartItemConfig } from "lib/types/cart-item-config";
import React from "react";
import BrandedButton from "../buttons/BrandedButton";
import DeliveryLocation from "../user/DeliveryAddress";
import ShippingMethod from "../user/ShippingMethod";

// CartItemConfig to pass state here for the add to cart state functionality
export default function PurchaseMenu(props: CartItemConfig) {
  let quantity = [];

  for (let i = 2; i < 101; i++) {
    quantity.push(i);
  }

  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );
  const borderColor = useColorModeValue("border.light", "border.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const dispatch = useAppDispatch();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Box
      rounded="2xl"
      borderWidth="1px"
      borderColor={borderColor}
      p="1rem"
      top="200"
      position="sticky"
    >
      <Text fontSize="1.5rem" mb="30px">
        {formatter.format(props.price)}
      </Text>

      <Flex fontSize="16px" fontWeight="500" gap="5px" mb="3px">
        Quantity
        <Text color={useColorModeValue("green", "#4af179")}> IN STOCK</Text>
      </Flex>
      <Select placeholder="1" w="5rem" mb="30px" borderColor={borderColor}>
        {quantity.map((i) => (
          <option>{i}</option>
        ))}
      </Select>

      <Box mb="50px">
        <Text fontSize="15px" fontWeight="semibold" mb="5px" color={textColor}>
          Deliver to John Doe
        </Text>

        <VStack>
          <DeliveryLocation w="100%" />
          <ShippingMethod w="100%" />
        </VStack>
      </Box>

      <BrandedButton
        onClick={() =>
          dispatch({
            type: "cart/append",
            payload: {
              id: props.id,
              title: props.title,
              price: props.price,
              image: props.image,
              quantity: props.quantity,
            },
          })
        }
      >
        Add to cart
      </BrandedButton>

      <BrandedButton>Buy now</BrandedButton>

      <Center gap="5px" pt="10px" mr="8px" mx="auto">
        <LockIcon boxSize="20px" fill={textColor} />

        <Text fontSize="16px" fontWeight="semibold" color={textColor}>
          Secure transaction
        </Text>
      </Center>
    </Box>
  );
}
