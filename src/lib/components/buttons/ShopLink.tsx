import { IconButton, Link } from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import React from "react";
import NextLink from "next/link";

export default function ShopLink(props: any) {
  return (
    <NextLink href="/shop" passHref>
      <Link>
        <IconButton
          icon={<ShoppingBagFilledIcon boxSize="25px" />}
          variant="ghost"
          size="lg"
          aria-label="Shop"
          colorScheme="blackAlpha"
          {...props}
        />
      </Link>
    </NextLink>
  );
}
