import React, { Component, ReactNode } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Icon,
  Link,
  RadioProps,
  Text,
  useColorModeValue,
  useRadio,
} from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export default function SubheaderLink(props: {
  href: string;
  text: string;
  icon: any;
}) {
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
        _hover={{ textDecoration: "none" }}
      >
        <Box
          fill={
            router.pathname == props.href
              ? useColorModeValue("text.light", "text.dark")
              : useColorModeValue("#717171", "#a3998d")
          }
          borderBottomWidth="2.5px"
          borderBottomColor={
            router.pathname == props.href
              ? useColorModeValue("text.light", "text.dark")
              : "rgba(0,0,0,0)"
          }
          color={
            router.pathname == props.href
              ? useColorModeValue("text.light", "text.dark")
              : useColorModeValue("#717171", "#a3998d")
          }
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("text.light", "text.dark"),
            fill: useColorModeValue("text.light", "text.dark"),

            borderBottomColor:
              router.pathname == props.href
                ? useColorModeValue("text.light", "text.dark")
                : useColorModeValue("gray.200", "gray.600"),
          }}
          px="10px"
        >
          <Icon w="100%" h="30px" mb="10px" as={props.icon} />

          <Text
            borderColor={borderColor}
            pb="20px"
            whiteSpace="nowrap"
            fontSize={{ base: "14px", md: "15px" }}
          >
            {props.text}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
}
