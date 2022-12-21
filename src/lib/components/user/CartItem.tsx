import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useAppDispatch } from "lib/app/hooks";
import { CartItemConfig } from "lib/types/cart-item-config";
import { useEffect, useState } from "react";
import HR from "../HR";
import ProductQuantity from "../product/ProductQuantity";

export default function CartItem(props: CartItemConfig) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  const [quantity, setQuantity] = useState(props.quantity);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: "cart/updateQuantity",
      payload: { id: props.id, quantity: quantity },
    });
  }, [quantity, dispatch, props.id]);

  return (
    <VStack>
      <Flex gap="1rem" align="center" w="100%" mb="15px">
        <Box w={100}>
          <Image
            src={props.image}
            alt={props.title}
            h={100}
            mx="auto"
            objectFit="contain"
            rounded="xl"
            mr={5}
            mb="auto"
          />
        </Box>

        <VStack mb="auto" mr="10px" align="left">
          <Text
            fontSize={{ base: "15px", md: "1rem" }}
            lineHeight="1"
            fontWeight="bold"
            w={[100, 200, 200]}
            noOfLines={2}
          >
            {props.title}
          </Text>
          <br />
          <Text mt="15%" fontWeight={{ base: "semibold", md: "400" }}>
            {formatter.format(
              parseFloat(props.price.substring(1).replace(",", "")) * quantity
            )}
          </Text>
        </VStack>

        <Box ml="auto">
          <ProductQuantity
            quantity={quantity}
            setQuantity={setQuantity}
            id={props.id}
          />
        </Box>
      </Flex>
    </VStack>
  );
}
