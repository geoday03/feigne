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
    <Box
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      bgColor={useColorModeValue("background.light", "background.dark")}
      height="87.4vh"
      width="200vh"
    >
      <Box width="75%" height="100%" mx="auto" borderBottomRadius="xl">
        <ProductRow amount={4} rowTitle="Product Category" category="e" />
      </Box>
    </Box>
  );
};

export default Landing;
