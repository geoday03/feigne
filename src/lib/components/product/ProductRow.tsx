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
  return (
    <Center>
      <Box p="5px">
        <Text
          fontFamily="body"
          fontWeight="600"
          fontSize="lg"
          color={useColorModeValue("text.light", "text.dark")}
          pl="15px"
        >
          {props.rowTitle}
        </Text>

        <Grid templateColumns="repeat(4, 1fr)">
          {Array(props.amount)
            .fill(0)
            .map(() => (
              <GridItem children={<ProductCard />} />
            ))}
        </Grid>
      </Box>
    </Center>
  );
}
