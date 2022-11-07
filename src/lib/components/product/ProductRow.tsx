import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import ProductCard from "./ProductCard";
import { getProducts } from "lib/features/products/productSlice";
import { useEffect } from "react";

export default function ProductRow(props: {
  amount: number;
  rowTitle: string;
  category: string;
}) {
  return (
    <Center>
      <Box p="5px">
        <Text
          fontFamily="body"
          fontWeight="600"
          fontSize="lg"
          p="8px"
          color={useColorModeValue("text.light", "text.dark")}
        >
          {props.rowTitle}
        </Text>

        <Grid templateColumns="repeat(4, 1fr)">
          {Array(16)
            .fill(0)
            .map(() => (
              <GridItem children={<ProductCard />} />
            ))}
        </Grid>
      </Box>
    </Center>
  );
}
