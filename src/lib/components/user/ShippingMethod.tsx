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
} from "@chakra-ui/react";
import { LocationIcon } from "lib/Icons/LocationIconSet";
import TruckIcon from "lib/Icons/TruckIcon";
import { useState } from "react";

export default function ShippingMethod(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState("1");

  return (
    <>
      <Button
        size="md"
        display={{
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
        p="0"
        backgroundColor="rgba(0,0,0,0)"
        variant="ghost"
        colorScheme={useColorModeValue("blackAlpha", "gray")}
        onClick={onOpen}
        leftIcon={
          <TruckIcon
            backgroundColor="rgba(0,0,0,0)"
            height="24px"
            width="24px"
            fill={useColorModeValue("text.light", "text.dark")}
            mr="2.5px"
          />
        }
        color={useColorModeValue("text.light", "text.dark")}
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
                        color={useColorModeValue("text.light", "text.dark")}
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
