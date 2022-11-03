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
} from "@chakra-ui/react";
import React from "react";

export default function HeaderDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        p="0"
        ml="20px"
        leftIcon={
          <HamburgerIcon
            width="2rem"
            height="3.5rem"
            pl="6px"
            color={useColorModeValue("text.light", "text.dark")}
          />
        }
        backgroundColor="rgba(0,0,0,0)"
        height="3.5rem"
        _hover={{ backgroundColor: "rgba(0,0,0,0)" }}
        onFocus={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0)")
        }
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
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
