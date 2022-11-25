import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import CTAButton from "lib/components/CTAButton";
import ProductRow from "lib/components/product/ProductRow";
import Slideshow from "lib/components/Carousel";
import ProductCard from "lib/components/product/ProductCard";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { useEffect } from "react";

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
        <ProductRow amount={4} rowTitle="Product Category" />

        <ProductRow amount={4} rowTitle="Product Category" />
      </Box>
    </Flex>
  );
};

export default Landing;
