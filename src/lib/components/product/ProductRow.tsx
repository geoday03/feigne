import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
// make it a scrollable flex
export default function ProductRow(props: {
  amount: number;
  rowTitle: string;
  category?: string;
}) {
  useEffect(() => {});

  return (
    <Box>
      <Text fontWeight="500" fontSize="20px" mb="10px">
        {props.rowTitle}
      </Text>

      <Flex gap={6} overflow="auto">
        {Array.from(Array(props.amount).keys()).map((i) => (
          <Box w="100%">
            <ProductCard />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
