import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import CTAButton from "lib/components/CTAButton";
import ProductRow from "lib/components/product/ProductRow";
import Slideshow from "lib/components/Carousel";
import ProductCard from "lib/components/product/ProductCard";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { useEffect } from "react";
import { getProducts } from "lib/features/products/productSlice";

const Landing = () => {
  return (
    <Flex
      bgColor={useColorModeValue("background.light", "background.dark")}
      p="0"
      m="0"
      h="100%"
    >
      <Box mx="auto">
        <ProductRow amount={16} rowTitle="Product Category" category="e" />
      </Box>
    </Flex>
  );
};

export default Landing;
