import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import ThemeToggle2 from "lib/layout/ThemeToggle2";
import React from "react";

export default function HeaderDrawer(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme={useColorModeValue("blackAlpha", "gray")}
        ref={btnRef}
        size="lg"
        onClick={onOpen}
        h="100%"
        icon={
          <HamburgerIcon
            boxSize="22px"
            color={useColorModeValue("text.light", "text.dark")}
          />
        }
        {...props}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            variant="ghost"
            colorScheme={useColorModeValue("blackAlpha", "gray")}
            onClick={onOpen}
          />
          <DrawerHeader>Preferences</DrawerHeader>

          <DrawerBody>
            <ThemeToggle2 />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
