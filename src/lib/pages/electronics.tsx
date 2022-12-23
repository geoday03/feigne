import { Center } from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";
import { NextSeo } from "next-seo";

const Electronics = () => {
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
        title="Feigne: Electronics"
        description="Shop electronics today at feigne.app"
      />

      <ProductRow
        rowTitle="Gaming Headsets"
        category="gamingHeadsets"
        amount={5}
      />

      <ProductRow
        rowTitle={"Gaming Laptops"}
        category={"gamingLaptops"}
        amount={5}
      />

      <ProductRow rowTitle={"RAM Sticks"} category={"ramSticks"} amount={5} />

      <ProductRow
        rowTitle={"Monitors"}
        category={"computerMonitors"}
        amount={5}
      />

      <ProductRow
        rowTitle={"Solid State Hard Drives"}
        category={"SSDs"}
        amount={5}
      />
    </Center>
  );
};

export default Electronics;
