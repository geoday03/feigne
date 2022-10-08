import React, {
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

import {
  useMediaQuery,
  useTheme,
  Progress,
  VStack,
  Button,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion, useAnimation, useMotionValue } from "framer-motion";

export default function Slideshow() {
  return (
    <Box width="75%" mx="auto">
      <Image src="/feigne-member-exclusive.png" />
    </Box>
  );
}
