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
  return (
    <Box pb="15px">
      <Text fontWeight="500" fontSize="20px" mb="10px">
        {props.rowTitle}
      </Text>

      <Grid
        templateColumns={{
          sm: "repeat(2, minmax(0,1fr))",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {Array.from(Array(props.amount).keys()).map(() => (
          <ProductCard />
        ))}
      </Grid>
    </Box>
  );
}
