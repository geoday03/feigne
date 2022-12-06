import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Image,
  Text,
  Card,
  CardBody,
  Button,
  Heading,
  CardFooter,
  Divider,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const Landing = () => {
  return (
    <Center
      pt="20px"
      flexDirection="column"
      mb={8}
      w={{ base: "95%", md: "90%" }}
      mx="auto"
    >
      <ProductRow rowTitle="Shop Men's Clothing" amount={25} />
      <ProductRow rowTitle="Shop Men's Clothing" amount={25} />
    </Center>
  );
};

export default Landing;
