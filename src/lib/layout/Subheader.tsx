import {
  border,
  Center,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  useRadioGroup,
} from "@chakra-ui/react";
import SubheaderLink from "lib/components/buttons/SubheaderLink";
import NextLink from "next/link";

export default function Subheader() {
  const borderColor = useColorModeValue("text.light", "border.dark");

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Home",
  });

  return (
    <Flex
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      gap="7%"
      fontFamily="body"
      fontWeight="500"
      fontSize="15px"
      color={useColorModeValue("text.light", "text.dark")}
      lineHeight="1"
      overflow="auto"
      m="auto"
      letterSpacing="wide"
      pb="0"
      mb="0"
      borderColor="rgba(0,0,0,0)"
      borderBottomWidth="1px"
      onScroll={(e) => {
        if (e.currentTarget.scrollTop > 0)
          console.log(e.currentTarget.scrollTop);
      }}
    >
      <Spacer />

      <SubheaderLink href="/" text="Home" />

      <SubheaderLink href="/" text="Shop" />

      <SubheaderLink
        href="/store/categories/clothing/men"
        text="Men's Clothing"
      />

      <SubheaderLink
        href="/store/categories/clothing/women"
        text="Women's Clothing"
      />

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

      <Spacer />
    </Flex>
  );
}
