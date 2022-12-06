import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Link,
  RadioProps,
  Text,
  useColorModeValue,
  useRadio,
} from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export default function SubheaderLink(props: { href: string; text: string }) {
  const router = useRouter();
  const borderColor = useColorModeValue("text.light", "border.dark");

  const handleClick = (e: any) => {
    router.push(props.href);
  };

  return (
    <NextLink href={props.href} passHref>
      <Link
        colorScheme="gray"
        variant="ghost"
        onClick={handleClick}
        borderBottomWidth={router.pathname == props.href ? "2px" : "0"}
        borderBottomColor={
          router.pathname == props.href
            ? useColorModeValue("text.light", "text.dark")
            : "gray.200"
        }
        color={
          router.pathname == props.href
            ? useColorModeValue("text.light", "text.dark")
            : "#717171"
        }
        _hover={{
          textDecoration: "none",
          borderBottomWidth: "2px",
          color: useColorModeValue("text.light", "text.dark"),
        }}
      >
        <Text
          borderColor={borderColor}
          pb="20px"
          whiteSpace="nowrap"
          fontSize={{ base: "14px", md: "15px" }}
        >
          {props.text}
        </Text>
      </Link>
    </NextLink>
  );
}
