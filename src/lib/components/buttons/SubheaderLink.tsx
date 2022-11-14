import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function SubheaderLink() {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Text borderBottomWidth="3px" borderColor={borderColor} pb="20px">
          Home
        </Text>
      </Link>
    </NextLink>
  );
}
