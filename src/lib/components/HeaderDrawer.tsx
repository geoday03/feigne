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
        icon={
          <HamburgerIcon
            boxSize="25px"
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
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="solid" colorScheme="red" bgColor="brand.primary">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
