import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import CTAButton from "lib/components/CTAButton";
import ProductRow from "lib/components/product/ProductRow";
import Slideshow from "lib/components/Carousel";
import ProductCard from "lib/components/product/ProductCard";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import { useEffect } from "react";
import { getProducts } from "lib/features/products/productSlice";

const Landing = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts({ resultLimit: 3, category: "jewelry" }));
  }, [dispatch]);

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
        <Box width="200px" height="200px" px="10%">
          <ProductCard
            id={products[0].id}
            title={products[0].title}
            price={products[0].price}
            image={products[0].image}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
