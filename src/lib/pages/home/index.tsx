import { Box, Flex } from "@chakra-ui/react";

import ProductRow from "lib/components/product/ProductRow";

import { NextSeo } from "next-seo";

const Landing = () => {
  return (
    <Flex
      pt="20px"
      flexDirection="column"
      alignItems="left"
      mb={8}
      w={{ base: "95%", md: "90%" }}
      mx="auto"
      px="5px"
      gap="1rem"
    >
      <NextSeo title="Feigne: Mockup E-Commerce Application" />

      <Box>
        <ProductRow
          rowTitle="New Arrivals"
          amount={5}
          category="computerMonitors"
        />
      </Box>
      <Box pb="5px">
        <ProductRow
          rowTitle="Shop Men's Clothing"
          amount={5}
          category="mensJackets"
        />
      </Box>
      <Box pb="5px">
        <ProductRow
          rowTitle="Shop Women's Clothing"
          amount={5}
          category="womensJackets"
        />
      </Box>
    </Flex>
  );
};

export default Landing;
