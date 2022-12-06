import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Shop = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      mx="auto"
    >
      <Image src="/feigne-member-exclusive.png" />
      <Box pb="10px" mt="-20%">
        <ProductRow rowTitle="New Arrivals" amount={5} />
      </Box>

      <Box pb="10px">
        <ProductRow rowTitle="Shop Men's Clothing" amount={5} />
      </Box>

      <Box pb="10px">
        <ProductRow rowTitle="Shop Women's Clothing" amount={5} />
      </Box>

      <ProductRow amount={5} rowTitle="Jewelry" category="jewelry" />

      <Box>
        <ProductRow amount={5} rowTitle="Clothing" category="clothing" />
      </Box>
    </Center>
  );
};

export default Shop;
