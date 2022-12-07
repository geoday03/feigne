import {
  border,
  Box,
  Center,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  useRadioGroup,
} from "@chakra-ui/react";
import SubheaderLink from "lib/components/buttons/SubheaderLink";
import BlouseIcon from "lib/Icons/BlouseIcon";
import CrewmateIcon from "lib/Icons/CrewmateIcon";
import HomeIcon from "lib/Icons/HomeIcon";
import NecklaceIcon from "lib/Icons/NecklaceIcon";
import ShirtIcon from "lib/Icons/ShirtIcon";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import NextLink from "next/link";
import PhoneIcon from "lib/Icons/PhoneIcon";

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

  const icons = [
    HomeIcon,
    ShoppingBagFilledIcon,
    ShirtIcon,
    BlouseIcon,
    NecklaceIcon,
    PhoneIcon,
    CrewmateIcon,
  ];

  return (
    <Flex
      w="100%"
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      fontFamily="body"
      fontWeight="500"
      fontSize="15px"
      color={useColorModeValue("text.light", "text.dark")}
      lineHeight="1"
      overflow="auto"
      pb="0"
      mb="0"
      {...props}
    >
      <Flex mx="auto" gap="20px" px="20px">
        {Object.keys(navLinks).map((key, i) => {
          return (
            <SubheaderLink
              key={i}
              text={key}
              href={navLinks[key as keyof {}]}
              icon={icons[i]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
