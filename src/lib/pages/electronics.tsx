import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Electronics = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      mx="auto"
    >
      <ProductRow rowTitle="Newest Electronics" amount={36} />
    </Center>
  );
};

export default Electronics;
