import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Shop = () => {
  return (
    <Box display={{ md: "flex" }} flexDirection="column" overflowX="clip">
      <Image
        src="/feigne-member-exclusive.png"
        height="auto"
        width="100%"
        fit="cover"
        margin="0 auto"
      />

      <Box
        pt="20px"
        mt="-24%"
        width="1500"
        height="500px"
        zIndex="1"
        pb="15px"
        bgGradient={`linear(to-b, #1998ff, ${useColorModeValue(
          "background.light",
          "background.dark"
        )})`}
        borderRadius="2rem"
      >
        <ProductRow
          amount={5}
          rowTitle="Recommended Items"
          category="amongUs"
        />
      </Box>

      <ProductRow amount={5} rowTitle="Jewelry" category="jewelry" />

      <Box>
        <ProductRow amount={5} rowTitle="Clothing" category="clothing" />
      </Box>
    </Box>
  );
};

export default Shop;
