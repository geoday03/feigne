import React, { ReactNode } from "react";

import { Link, Text, useColorModeValue, useRadio } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SubheaderLink(
  props: { href: string; text: string },
  ...rest: any
) {
  const borderColor = useColorModeValue("text.light", "border.dark");

  // const { ...radioProps } = props;

  // const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
  //   useRadio(radioProps);

  return (
    <NextLink href={props.href} passHref>
      <Link colorScheme="gray" variant="ghost" {...rest}>
        <Text
          borderBottomWidth="3px"
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
