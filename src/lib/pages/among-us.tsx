import { Center } from "@chakra-ui/react";

import ProductRow from "lib/components/product/ProductRow";

import { NextSeo } from "next-seo";

const AmongUs = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      h="100%"
      mx="auto"
      gap="2rem"
    >
      <NextSeo
        title="Among Us"
        description="Shop among us today at feigne.app"
      />

      <ProductRow
        rowTitle="Among Us Dolls"
        category={"amongUsDolls"}
        amount={30}
      />

      <ProductRow
        rowTitle="Among Us Toys"
        category={"amongUsToys"}
        amount={30}
      />
    </Center>
  );
};

export default AmongUs;
