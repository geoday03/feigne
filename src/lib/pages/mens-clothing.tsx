import { Center } from "@chakra-ui/react";

import ProductRow from "lib/components/product/ProductRow";

import { NextSeo } from "next-seo";

const MensClothing = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w={{ base: "95%", md: "90%" }}
      pt="10px"
      mx="auto"
      mb={8}
    >
      <NextSeo
        title="Feigne: Men's Clothing"
        description="Shop men's clothing today at feigne.app"
      />

      <ProductRow rowTitle="Men's Shirts" amount={10} category={"mensShirts"} />

      <ProductRow
        rowTitle="Men's Jackets"
        amount={10}
        category={"mensJackets"}
      />

      <ProductRow rowTitle="Men's Pants" amount={10} category={"mensPants"} />
    </Center>
  );
};

export default MensClothing;
