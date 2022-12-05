import {
  Center,
  Flex,
  Box,
  Heading,
  Link,
  useColorModeValue,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SubHeader from "./Subheader";
import SearchBar from "lib/components/SearchBar";
import NextLink from "next/link";
import HeaderDrawer from "lib/components/HeaderDrawer";

import ThemeToggle from "./ThemeToggle";
import AddressModal from "lib/components/user/DeliveryAddress";
import Cart from "lib/components/user/Cart";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import ShippingMethod from "lib/components/user/ShippingMethod";

const Header = () => {
  return (
    <Flex flexDirection="column" top="0" position="sticky" zIndex={100}>
      <Wrap
        as="header"
        alignItems="center"
        backgroundColor={useColorModeValue(
          "background.light",
          "background.dark"
        )}
        maxW="100%"
        padding="10px"
        gap="1rem"
      >
        <Center w="100%">
          <WrapItem mr="2rem">
            <HeaderDrawer />
          </WrapItem>

          <WrapItem>
            <NextLink href="/">
              <Link
                textDecor="none"
                _hover={{ textDecoration: "none" }}
                mr="6%"
              >
                <Center height="3.5rem">
                  <ShoppingBagFilledIcon
                    boxSize="1.65rem"
                    fill="brand.primary"
                  />
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
          </WrapItem>

          <Spacer />

          <Center w="35%" ml="3%">
            <SearchBar />
          </Center>

          <Spacer />

          <WrapItem ml="3%">
            <ShippingMethod />
          </WrapItem>

          <WrapItem>
            <Center
              ml="1rem"
              mr="1rem"
              display={{
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              }}
            >
              <AddressModal />
            </Center>
          </WrapItem>

          <WrapItem>
            <Cart />
          </WrapItem>

          <WrapItem>
            <ThemeToggle />
          </WrapItem>
        </Center>
      </Wrap>

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
