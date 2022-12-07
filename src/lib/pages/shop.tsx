import { MoonIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Shop = () => {
  return (
    <Center
      pt="20px"
      flexDirection="column"
      mb={8}
      w={{ base: "95%", md: "90%" }}
      mx="auto"
      px="5px"
    >
      <Box pb="5px">
        <ProductRow rowTitle="Recommended" amount={5} />
      </Box>

      <Box pb="5px">
        <ProductRow rowTitle="Trending" amount={6} />
      </Box>

      <Box pb="5px">
        <ProductRow rowTitle="Bestsellers" amount={6} />
      </Box>
    </Center>
  );
};

export default Shop;
