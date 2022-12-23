import {
  Center,
  Flex,
  Box,
  Heading,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import SubHeader from "./Subheader";
import SearchBar from "lib/components/SearchBar";
import NextLink from "next/link";
import HeaderDrawer from "lib/components/HeaderDrawer";

import ThemeToggle from "../components/ThemeToggle";
import AddressModal from "lib/components/user/DeliveryAddress";
import Cart from "lib/components/user/Cart";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import ShippingMethod from "lib/components/user/ShippingMethod";
import DeliveryLocation from "lib/components/user/DeliveryAddress";
import useScrollPosition from "lib/hooks/useScrollPosition";

const Header = () => {
  const scrollPos = useScrollPosition();

  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      top="0"
      position="sticky"
      zIndex={100}
      boxShadow={scrollPos > 5 ? (colorMode == "light" ? "lg" : "2xl") : "none"}
      bgColor={colorMode == "light" ? "background.light" : "background.dark"}
      as="header"
      transition="0.5s ease-out"
    >
      <Flex alignItems="center" maxW="100%" padding="10px" gap="1rem">
        <Center w="100%">
          <HeaderDrawer
            display={{
              base: "flex",
              md: "none",
            }}
          />

          <NextLink href="/">
            <Link
              textDecor="none"
              _hover={{ textDecoration: "none" }}
              mr="6%"
              ml={{ base: "0", md: 7 }}
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
              md: "none",
              lg: "flex",
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
        pt="20px"
        borderTopColor={colorMode == "light" ? "gray.200" : "rgba(0,0,0,0)"}
        transition="0.5s ease-out"
        borderTopWidth="1px"
      >
        <SubHeader />
      </Box>
      <Flex display={{ base: "flex", md: "none" }} px="3px" boxShadow="base">
        <DeliveryLocation w="100%" mx="auto" />
      </Flex>
    </Flex>
  );
};

export default Header;
