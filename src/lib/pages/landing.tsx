import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Landing = () => {
  return (
    <Center pt="20px" flexDirection="column" mb={8} w="90%" mx="auto">
      <VStack mx="auto">
        <ProductRow amount={35} rowTitle="Product Category" />
      </VStack>
    </Center>
  );
};

export default Landing;
