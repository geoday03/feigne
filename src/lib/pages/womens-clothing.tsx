import { Center } from "@chakra-ui/react";

import ProductRow from "lib/components/product/ProductRow";

import { NextSeo } from "next-seo";

const WomensClothing = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      mx="auto"
      gap="2rem"
    >
      <NextSeo
        title="Feigne: Women's Clothing"
        description="Shop women's clothing at feigne.app"
      />

      <ProductRow
        rowTitle="Women's Pants"
        amount={10}
        category={"womensPants"}
      />

      <ProductRow
        rowTitle="Women's Shirts"
        amount={10}
        category={"womensShirts"}
      />

      <ProductRow
        rowTitle="Women's Jackets"
        amount={10}
        category={"womensJackets"}
      />
    </Center>
  );
};

export default WomensClothing;
