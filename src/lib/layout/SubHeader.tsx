import { Center, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SubHeader() {
  return (
    <Center
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      gap="7%"
      fontFamily="body"
      fontWeight="500"
      fontSize="15px"
      color={useColorModeValue("text.light", "text.dark")}
    >
      <NextLink href="/" passHref>
        <Link>
          <Text borderBottomWidth="3px" borderColor="text.light" pb="20px">
            Home
          </Text>
        </Link>
      </NextLink>

      <NextLink href="/" passHref>
        <Link>
          <Text pb="15px">Shop</Text>
        </Link>
      </NextLink>

      <NextLink href="/store/categories/clothing/men" passHref>
        <Link>
          <Text pb="15px">Men's Clothing</Text>
        </Link>
      </NextLink>

      <NextLink href="/store/categories/clothing/women" passHref>
        <Link>
          <Text pb="15px">Women's Clothing</Text>
        </Link>
      </NextLink>

      <NextLink href="/store/categories/jewelery" passHref>
        <Link>
          <Text pb="15px">Jewelery</Text>
        </Link>
      </NextLink>

      <NextLink href="/store/categories/electronics" passHref>
        <Link>
          <Text pb="15px">Electronics</Text>
        </Link>
      </NextLink>

      <NextLink href="/categories/among-us" passHref>
        <Link>
          <Text pb="15px">Among Us</Text>
        </Link>
      </NextLink>
    </Center>
  );
}
