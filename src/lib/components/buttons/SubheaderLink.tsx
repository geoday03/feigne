import React, { Component, ReactNode } from "react";
import { useRouter } from "next/router";

import {
  Button,
  Center,
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export default function SubheaderLink(props: {
  href: string;
  text: string;
  icon: any;
}) {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("text.light", "border.dark");

  const handleClick = (e: any) => {
    router.push(props.href);
  };

  return (
    <Button
      variant="unstyled"
      rounded="none"
      textAlign="center"
      h="full"
      borderBottomWidth="2.5px"
      borderBottomColor={
        router.pathname == props.href
          ? colorMode == "light"
            ? "text.light"
            : "text.dark"
          : "rgba(0,0,0,0)"
      }
      color={
        router.pathname == props.href
          ? colorMode == "light"
            ? "text.light"
            : "text.dark"
          : colorMode == "light"
          ? "#717171"
          : "#a3998d"
      }
      fill={
        router.pathname == props.href
          ? colorMode == "light"
            ? "text.light"
            : "text.dark"
          : colorMode == "light"
          ? "#717171"
          : "#a3998d"
      }
      _hover={{
        textDecoration: "none",
        color: colorMode == "light" ? "text.light" : "text.dark",
        fill: colorMode == "light" ? "text.light" : "text.dark",

        borderBottomColor:
          router.pathname == props.href
            ? colorMode == "light"
              ? "text.light"
              : "text.dark"
            : colorMode == "light"
            ? "gray.200"
            : "gray.600",
      }}
    >
      <NextLink href={props.href}>
        <Flex flexDirection="column" gap={2.5} pb={3} px={3}>
          <Icon as={props.icon} boxSize={30} w="full" mx="auto" />

          <Text fontSize={15} whiteSpace="nowrap">
            {props.text}
          </Text>
        </Flex>
      </NextLink>
    </Button>
  );
}
