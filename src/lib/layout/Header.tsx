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
        maxW="100%"
        padding="10px"
        gap="1rem"
        overflow="auto"
      >
        <HeaderDrawer />

        <NextLink href="/">
          <Link textDecor="none" _hover={{ textDecoration: "none" }}>
            <Center height="3.5rem">
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

        <Center width="20%" ml="auto">
          <SearchBar />
        </Center>

        <Box ml="auto">
          <DeliveryEstimate />
        </Box>

        <Box>
          <AddressModal />
        </Box>

        <Box>
          <Cart />
        </Box>

        <ThemeToggle />
      </Flex>

      <Box
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
