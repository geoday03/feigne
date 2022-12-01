import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Landing = () => {
  return (
    <Flex
      bgColor={useColorModeValue("background.light", "background.dark")}
      p="0"
      pt="20px"
      m="0"
      h="100%"
    >
      <Box mx="auto">
        <ProductRow key="1" amount={4} rowTitle="Product Category" />

        <ProductRow key="2" amount={4} rowTitle="Product Category" />
      </Box>
    </Flex>
  );
};

export default Landing;
