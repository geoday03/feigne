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

      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {Array.from(Array(props.amount).keys()).map((i) => (
          <GridItem w="100%">
            <ProductCard />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
