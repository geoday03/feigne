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
import DeliveryEstimate from "lib/components/user/DeliveryEstimate";

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

          <Center width="35%">
            <SearchBar />
          </Center>

          <Spacer />

          <WrapItem>
            <DeliveryEstimate />
          </WrapItem>

          <WrapItem>
            <Center ml="1rem" mr="1rem">
              <AddressModal />
            </Center>
          </WrapItem>

          <WrapItem>
            <Center maxH="3rem" ml="1rem">
              <Cart />
            </Center>
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
