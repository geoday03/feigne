import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Flex,
  Center,
  Stack,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Heading,
  Link,
} from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import { ProductCardConfig } from "lib/types/ProductCardConfig";
import NextLink from "next/link";

export default function ProductCard(product: ProductCardConfig) {
  return (
    <NextLink
      href={{ pathname: "/product/[pid]", query: { pid: product.id } }}
      passHref
    >
      <Link _hover={{ textDecoration: "none" }}>
        <Box w={{ base: "40vw", md: "unset" }}>
          <Box mb="10px" rounded="xl" h="full">
            <Image
              src={
                product.image ||
                "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
              }
              alt={product.title || "Product Title"}
              mx="auto"
              h={200}
              w={[300, 400, 500]}
              objectFit="contain"
              overflow="hidden"
            />
          </Box>

          <Stack>
            <Box mb="5px">
              <Heading noOfLines={2} fontSize="20px" fontWeight="500" mb="3px">
                {product.title || "Product Title"}
              </Heading>

              <Text as="h4" fontSize="17px" noOfLines={1}>
                {product.price || "$3,523"}
              </Text>
            </Box>

            <Flex
              as="span"
              color="gray.600"
              fontSize="xs"
              alignContent="center"
              flexDirection="row"
            >
              <Center gap="4px">
                <ShoppingBagFilledIcon
                  fill={useColorModeValue(
                    "background.dark",
                    "background.light"
                  )}
                  boxSize="15px"
                  width="15px"
                />

                <Text color={useColorModeValue("gray.600", "gray.500")}>
                  One day delivery
                </Text>
              </Center>
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
                {product.reviewLength && product.reviewLength > 0
                  ? product.reviewLength
                  : 420}{" "}
                reviews
              </Box>
            </Box>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
}
