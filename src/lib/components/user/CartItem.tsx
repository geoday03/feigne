import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "lib/app/hooks";
import { CartItemConfig } from "lib/types/cart-item-config";
import { Product } from "lib/types/product";
import { useEffect, useState } from "react";
import HR from "../HR";
import ProductQuantity from "../product/ProductQuantity";

export default function CartItem(props: CartItemConfig) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [quantity, setQuantity] = useState(props.quantity);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (quantity == 0) {
      const { id } = props;
      dispatch({ type: "cart/remove", payload: props.id });
    }
  }, [quantity]);

  return (
    <VStack display={quantity == 0 ? "none" : "flex"}>
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
          >
            {props.title}
            <br />
            <Text mt="15%" fontWeight={{ base: "semibold", md: "400" }}>
              {formatter.format(props.price * quantity)}
            </Text>
          </Text>
        </VStack>

        <Box ml="auto">
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        </Box>
      </Flex>
      <HR />
    </VStack>
  );
}
