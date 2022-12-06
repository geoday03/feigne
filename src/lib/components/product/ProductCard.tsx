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
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import { ProductCardConfig } from "lib/types/ProductCardConfig";
import NextLink from "next/link";

export default function ProductCard(product: ProductCardConfig) {
  return (
    <LinkBox w="100%">
      <NextLink
        href={{ pathname: "/product/[pid]", query: { pid: "1" } }}
        passHref
      >
        <LinkOverlay>
          <Box
            backgroundColor={useColorModeValue(
              "background.light",
              "background.dark"
            )}
            borderRadius="xl"
          >
            <Box mb="10px" rounded="xl">
              <Image
                src={
                  product.image ||
                  "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
                }
                alt={product.title || "Product Title"}
                rounded="xl"
                w="100%"
              />
            </Box>

            <Stack>
              <Box mb="5px">
                <Heading noOfLines={2} fontSize="20px" fontWeight="400">
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
                gap="3px"
                flexDirection="row"
              >
                <ShoppingBagFilledIcon
                  fill={useColorModeValue(
                    "background.dark",
                    "background.light"
                  )}
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
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
}
