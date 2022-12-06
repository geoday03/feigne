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
    <Box>
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
        display={{ base: "none", sm: "unset" }}
        gap={6}
      >
        <ProductCard key="0" />

        <Box display={{ base: "flex", md: "flex", lg: "flex" }}>
          <ProductCard key="2" />
        </Box>

        <Box display={{ base: "none", md: "flex", lg: "flex" }}>
          <ProductCard key="2" />
        </Box>

        <Box display={{ base: "none", md: "none", lg: "flex" }}>
          <ProductCard key="3" />
        </Box>

        <Box display={{ base: "none", md: "none", lg: "none", xl: "flex" }}>
          <ProductCard key="3" />
        </Box>
      </Grid>

      <Flex gap="1rem" p="5px">
        <ProductCard />
        <ProductCard />
      </Flex>
    </Box>
  );
}
