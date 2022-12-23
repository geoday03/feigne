import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  DrawerCloseButton,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
  Radio,
  RadioGroup,
  VStack,
  Text,
  Center,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import TruckIcon from "lib/Icons/TruckIcon";
import { useState } from "react";

export default function ShippingMethod(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState("1");

  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <>
      <Button
        size="md"
        p="0"
        variant="ghost"
        colorScheme={colorMode == "light" ? "blackAlpha" : "gray"}
        onClick={onOpen}
        leftIcon={
          <TruckIcon
            backgroundColor="rgba(0,0,0,0)"
            boxSize="24px"
            fill={textColor}
            transition="0.5s ease-out"
          />
        }
        color={textColor}
        {...props}
      >
        <Text maxW="100%" textOverflow="ellipsis">
          Default Shipping
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
        <ModalOverlay />

        <ModalContent h="80%" rounded="2xl">
          <ModalHeader mx="auto">
            <DrawerCloseButton size="lg" />
            Select Shipping
          </ModalHeader>

          <ModalBody>
            <RadioGroup onChange={setValue} value={value}>
              <VStack p="10px">
                <Box
                  borderBottomWidth="1px"
                  borderBottomColor="border.light"
                  p="15px"
                  pb="25px"
                  w="100%"
                >
                  <Radio borderColor="border.light" mr="auto" size="md">
                    <Center>
                      <Text
                        color={textColor}
                        fontWeight="semibold"
                        ml="50px"
                        fontSize="xl"
                      >
                        Default Shipping
                      </Text>
                    </Center>
                  </Radio>
                </Box>
              </VStack>
            </RadioGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
