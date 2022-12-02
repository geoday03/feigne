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
      <ProductRow rowTitle="" amount={20} />
    </Center>
  );
};

export default Landing;
