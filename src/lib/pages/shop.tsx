import { Box, Center } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import ProductRow from "lib/components/product/ProductRow";
import { getProducts } from "lib/features/product-slice";
import { NextSeo } from "next-seo";

const Shop = () => {
  const dispatch = useAppDispatch();

  const products = dispatch(
    getProducts({ resultLimit: 5, category: "amongUsDolls" })
  );

  return (
    <Center
      pt="20px"
      flexDirection="column"
      mb={8}
      w={{ base: "95%", md: "90%" }}
      mx="auto"
      px="5px"
    >
      <NextSeo title="Feigne: Shop" description="Shop today at feigne.app" />

      <Box pb="5px">
        <ProductRow
          rowTitle="Recommended"
          amount={5}
          category="gamingLaptops"
        />
      </Box>

      <Box pb="5px">
        <ProductRow rowTitle="Trending" amount={5} category="womensShirts" />
      </Box>

      <Box pb="5px">
        <ProductRow rowTitle="Bestsellers" amount={5} category="SSDs" />
      </Box>
    </Center>
  );
};

export default Shop;
