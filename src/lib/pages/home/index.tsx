import { Box, Flex } from "@chakra-ui/react";

import ProductRow from "lib/components/product/ProductRow";

import { NextSeo } from "next-seo";

const Landing = () => {
  return (
    <Flex
      pt="20px"
      flexDirection="column"
      alignItems="left"
      pb={8}
      w={{ base: "95%", md: "90%" }}
      mx="auto"
      px="5px"
      gap="1rem"
    >
      <NextSeo
        title="Feigne: Mockup E-Commerce Application"
        openGraph={{
          url: `https://feigne.app`,
          title: "Feigne: Mockup E-Commerce Application",
          description: "Shop our latest arrivals today!",
          images: [
            {
              url: "/feigne-snapshot.png",
              width: 1200,
              height: 800,
              alt: "Feigne Snapshot",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "Feigne: Mockup E-Commerce Application",
          site: `https://feigne.app`,
          cardType: "summary_large_image",
        }}
      />

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
