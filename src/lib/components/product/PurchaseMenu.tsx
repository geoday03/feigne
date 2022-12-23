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
import React, { useState } from "react";
import BrandedButton from "../buttons/BrandedButton";
import DeliveryLocation from "../user/DeliveryAddress";
import ShippingMethod from "../user/ShippingMethod";

export default function PurchaseMenu(props: {
  title?: string;
  image?: string;
  price?: string;
}) {
  let quantity = [];

  for (let i = 2; i < 101; i++) {
    quantity.push(i);
  }

  const borderColor = useColorModeValue("border.light", "border.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const dispatch = useAppDispatch();

  const price = props.price || `$${3523.99}`;

  const [pQuantity, setPquantity] = useState(1);

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
        {price}
      </Text>

      <Flex fontSize="16px" fontWeight="500" gap="5px" mb="3px">
        Quantity
        <Text color={useColorModeValue("green", "#4af179")}> IN STOCK</Text>
      </Flex>
      <Select
        placeholder="1"
        w="5rem"
        mb="30px"
        borderColor={borderColor}
        onChange={(e: any) => setPquantity(e.currentTarget.value)}
      >
        {quantity.map((i) => (
          <option key={i}>{i}</option>
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
              title: props.title || "Product Title",
              price: price,
              image:
                props.image ||
                "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg",

              quantity: pQuantity,
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
