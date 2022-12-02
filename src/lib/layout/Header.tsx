import {
  Center,
  Flex,
  Box,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import SubHeader from "./Subheader";
import SearchBar from "lib/components/SearchBar";
import NextLink from "next/link";
import HeaderDrawer from "lib/components/HeaderDrawer";

import ThemeToggle from "./ThemeToggle";
import AddressModal from "lib/components/user/DeliveryAddress";
import Cart from "lib/components/user/Cart";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import DeliveryEstimate from "lib/components/user/DeliveryEstimate";

const Header = () => {
  return (
    <Flex flexDirection="column" top="0" position="sticky" zIndex={100}>
      <Flex
        as="header"
        alignItems="center"
        backgroundColor={useColorModeValue(
          "background.light",
          "background.dark"
        )}
        padding="10px"
        gap="1rem"
      >
        <HeaderDrawer />

        <NextLink href="/">
          <Link textDecor="none" _hover={{ textDecoration: "none" }}>
            <Center height="3.5rem" float="left">
              <ShoppingBagFilledIcon boxSize="1.65rem" fill="brand.primary" />
              <Heading
                color="brand.primary"
                fontSize="1.6rem"
                letterSpacing="0"
              >
                feigne
              </Heading>
            </Center>
          </Link>
        </NextLink>

        <Box width="17%" ml="30%">
          <SearchBar />
        </Box>

        <Box ml="auto" mr="13px">
          <DeliveryEstimate />
        </Box>

        <Box mr="10px">
          <AddressModal />
        </Box>

        <Cart />

        <ThemeToggle />
      </Flex>

      <Box
        mx="auto"
        w="100%"
        pt="35px"
        borderTopColor={useColorModeValue("gray.200", "rgba(0,0,0,0)")}
        borderTopWidth="1px"
        bgColor={useColorModeValue("background.light", "background.dark")}
      >
        <SubHeader />
      </Box>
    </Flex>
  );
};

export default Header;
