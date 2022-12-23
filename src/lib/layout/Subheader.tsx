import { Flex, useColorMode, useRadioGroup } from "@chakra-ui/react";
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
  const navLinks = {
    Home: "/",
    Shop: "/shop",
    "Men's Clothing": "/shop/clothing/men",
    "Women's Clothing": "/shop/clothing/women",
    Jewelry: "/shop/jewelry",
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

  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      transition="0.5s ease-out"
      bgColor={colorMode == "light" ? "background.light" : "background.dark"}
      fontFamily="body"
      fontWeight="500"
      fontSize="15px"
      color={colorMode == "light" ? "text.light" : "text.dark"}
      lineHeight="1"
      overflow="auto"
      pb="0"
      mb="0"
      {...props}
    >
      <Flex mx="auto" gap={10} px="20px">
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
