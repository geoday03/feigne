import { IconButton, Link } from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import React from "react";
import NextLink from "next/link";

export default function ShopLink(props: any) {
  return (
    <NextLink href="/shop" passHref>
      <Link>
        <IconButton
          icon={<ShoppingBagFilledIcon />}
          variant="ghost"
          aria-label="Shop"
          colorScheme="blackAlpha"
          {...props}
        ></IconButton>
      </Link>
    </NextLink>
  );
}
