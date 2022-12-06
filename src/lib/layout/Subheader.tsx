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

export default function Subheader(props: any) {
  const borderColor = useColorModeValue("text.light", "border.dark");

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Home",
  });

  const navLinks = {
    Home: "/",
    Shop: "/shop",
    "Men's Clothing": "/shop/clothing/men",
    "Women's Clothing": "/shop/clothing/women",
    Jewelery: "/shop/jewelery",
    Electronics: "/shop/electronics",
    "Among Us": "/shop/among-us",
  };

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
      pr="7px"
      mb="0"
      borderColor="rgba(0,0,0,0)"
      borderBottomWidth="1px"
      {...props}
    >
      <Spacer />

      {Object.keys(navLinks).map((key, i) => {
        return (
          <SubheaderLink key={i} text={key} href={navLinks[key as keyof {}]} />
        );
      })}

      <Spacer />
    </Flex>
  );
}
