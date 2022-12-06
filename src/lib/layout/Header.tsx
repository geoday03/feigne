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
        bgColor={{
          base: "brand.primary",
          md: useColorModeValue("background.light", "background.dark"),
        }}
      >
        <Center w="100%">
          <HeaderDrawer
            display={{
              base: "none",
              md: "flex",
            }}
          />

          <NextLink href="/">
            <Link
              textDecor="none"
              _hover={{ textDecoration: "none" }}
              mr="6%"
              display={{
                base: "none",
                md: "flex",
              }}
            >
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

          <Spacer
            display={{
              base: "none",
              md: "flex",
            }}
          />

          <SearchBar
            w={{ base: "100%", md: "35%" }}
            ml={{ base: "0", md: "3%" }}
            bgColor={useColorModeValue("background.light", "background.dark")}
          />

          <Spacer
            display={{
              base: "none",
              md: "flex",
            }}
          />

          <Box
            ml="3%"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <ShippingMethod />
          </Box>

          <Center
            ml="1rem"
            mr="1rem"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <AddressModal />
          </Center>

          <Cart
            display={{
              base: "none",
              md: "flex",
            }}
          />

          <Box
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <ThemeToggle />
          </Box>
        </Center>
      </Flex>

      <Box
        pt="25px"
        borderTopColor={useColorModeValue("gray.200", "rgba(0,0,0,0)")}
        borderTopWidth={{ base: "0", md: "1px" }}
        bgColor={{
          base: "brand.primary",
          md: useColorModeValue("background.light", "background.dark"),
        }}
      >
        <SubHeader
          bgColor={{
            base: "brand.primary",
            md: useColorModeValue("background.light", "background.dark"),
          }}
        />
      </Box>
      <Flex
        bgColor={useColorModeValue("background.light", "background.dark")}
        display={{ base: "flex", md: "none" }}
        p="3px"
      >
        <AddressModal w="85%" mx="auto" />
      </Flex>
    </Flex>
  );
};

export default Header;
