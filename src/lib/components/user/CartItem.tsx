import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { CartItemConfig } from "lib/types/cart-item-config";
import HR from "../HR";
import ProductQuantity from "../product/ProductQuantity";

export default function CartItem(props: CartItemConfig) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <VStack>
      <Flex gap="1rem" align="center" w="100%" mb="15px">
        <Image
          src={props.image}
          alt={props.title}
          objectFit="cover"
          w={{ base: "25%", md: "30%" }}
          rounded="xl"
        />

        <VStack mb="auto" mr="10px">
          <Text
            fontSize={{ base: "15px", md: "1rem" }}
            lineHeight="1"
            fontWeight="bold"
            maxW="8.75rem"
          >
            {props.title}
            <br />
            <Text mt="15%" fontWeight={{ base: "semibold", md: "400" }}>
              {formatter.format(props.price * props.quantity)}
            </Text>
          </Text>
        </VStack>

        <Box ml="auto">
          <ProductQuantity quantity={props.quantity} id={props.id} />
        </Box>
      </Flex>
    </VStack>
  );
}
