import { Center } from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";
import { NextSeo } from "next-seo";

const Jewelry = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      mx="auto"
    >
      <NextSeo title="Jewelry" />

      <ProductRow rowTitle="Real Jewelry" amount={36} category={"jewelry"} />
    </Center>
  );
};

export default Jewelry;
