import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import CTAButton from "lib/components/CTAButton";
import ProductRow from "lib/components/product/ProductRow";
import Slideshow from "lib/components/Slideshow";

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
      <Slideshow />
      <Box
        width="75%"
        height="100%"
        mx="auto"
        bgGradient="linear(to-b, brand.primary, rgba(0,0,0,0))"
        borderBottomRadius="xl"
      ></Box>
    </Box>
  );
};

export default Landing;
