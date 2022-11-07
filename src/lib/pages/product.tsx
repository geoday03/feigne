import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Box
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      h="1000px"
      w="100%"
    >
      <Box w="75%" mx="auto" bgColor="white">
        a
      </Box>
    </Box>
  );
}
