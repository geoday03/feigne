import {
  border,
  Center,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Subheader() {
  const borderColor = useColorModeValue("text.light", "border.dark");

  return (
    <Wrap
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      gap="7%"
      px="20px"
      fontFamily="body"
      fontWeight="500"
      fontSize="15px"
      color={useColorModeValue("text.light", "text.dark")}
      lineHeight="1"
    >
      <Spacer />

      <WrapItem>
        <NextLink href="/" passHref>
          <Link>
            <Text borderBottomWidth="3px" borderColor={borderColor} pb="20px">
              Home
            </Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/" passHref>
          <Link>
            <Text pb="15px">Shop</Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/store/categories/clothing/men" passHref>
          <Link>
            <Text pb="15px">Men's Clothing</Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/store/categories/clothing/women" passHref>
          <Link>
            <Text pb="15px">Women's Clothing</Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/store/categories/jewelery" passHref>
          <Link>
            <Text pb="15px">Jewelery</Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/store/categories/electronics" passHref>
          <Link>
            <Text pb="15px">Electronics</Text>
          </Link>
        </NextLink>
      </WrapItem>

      <Spacer />

      <WrapItem>
        <NextLink href="/categories/among-us" passHref>
          <Link>
            <Text pb="15px">Among Us</Text>
          </Link>
        </NextLink>
      </WrapItem>
      <Spacer />
    </Wrap>
  );
}
