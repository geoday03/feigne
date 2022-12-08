import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CartItemConfig } from "lib/types/cart-item-config";
import { Product } from "lib/types/product";
import { useState } from "react";
import ProductQuantity from "../product/ProductQuantity";

export default function CartItem(props: CartItemConfig) {
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <Flex gap="1rem" align="center" w="100%">
      <Image
        src={props.image}
        alt={props.title}
        objectFit="cover"
        w="5rem"
        rounded="xl"
      />

      <VStack>
        <Text fontSize="20px" fontWeight="500">
          {props.title}
        </Text>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
      </VStack>

      <Box>${(props.price * quantity).toFixed(2)}</Box>
    </Flex>
  );
}
