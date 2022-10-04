import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Flex,
  Center,
  Stack,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import { ProductCardConfig } from "lib/types/ProductCardConfig";

export default function ProductCard(product: ProductCardConfig) {
  return (
    <Center flexDirection="column">
      <Box
        maxW={"200px"}
        w={"full"}
        pos={"relative"}
        p="15px"
        backgroundColor="background.dark"
        borderRadius="xl"
      >
        <Box
          pos={"relative"}
          mb="10px"
          backgroundColor="#ffffff"
          borderRadius="xl"
        >
          <Image
            src={product.image}
            alt={product.title}
            height="170px"
            object-fit="cover"
            borderRadius="xl"
            ml="auto"
            mr="auto"
          />
        </Box>

        <Stack>
          <Text fontWeight="semibold" as="h4" noOfLines={1}>
            {product.price}
          </Text>

          <Text noOfLines={2} mt="1px">
            {product.title}
          </Text>

          <Flex
            as="span"
            color="gray.600"
            fontSize="xs"
            alignContent="center"
            gap="3px"
            mt="1px"
            flexDirection="row"
          >
            <ShoppingBagFilledIcon
              fill={useColorModeValue("background.dark", "background.light")}
              boxSize="15px"
              width="15px"
            />

            <Text color={useColorModeValue("gray.700", "gray.500")}>
              One day delivery
            </Text>
          </Flex>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
              ))}
            <Box
              as="span"
              ml="2"
              color={useColorModeValue("gray.700", "gray.500")}
              fontSize="sm"
            >
              420 reviews
            </Box>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}
