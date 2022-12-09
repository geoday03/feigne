import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const MensClothing = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w={{ base: "95%", md: "90%" }}
      pt="10px"
      mx="auto"
    >
      <ProductRow rowTitle="Men's Clothing" amount={36} />
    </Center>
  );
};

export default MensClothing;
