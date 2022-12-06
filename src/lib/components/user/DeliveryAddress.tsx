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
import { useState } from "react";

export default function DeliveryLocation(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState("1");

  return (
    <>
      <Button
        size="md"
        backgroundColor="rgba(0,0,0,0)"
        onClick={onOpen}
        variant="ghost"
        colorScheme={useColorModeValue("blackAlpha", "gray")}
        leftIcon={
          <LocationIcon
            backgroundColor="rgba(0,0,0,0)"
            height="24px"
            width="24px"
            fill={useColorModeValue("text.light", "text.dark")}
          />
        }
        color={useColorModeValue("text.light", "text.dark")}
        {...props}
      >
        <Text maxW="100%" textOverflow="ellipsis">
          1337 Got Root Ave
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
        <ModalOverlay />

        <ModalContent h="80%" rounded="2xl">
          <ModalHeader mx="auto">
            <DrawerCloseButton size="lg" />
            Select address
          </ModalHeader>

          <ModalBody>
            <InputGroup mb="2rem">
              <InputLeftElement>
                <Button variant="ghost" rounded="3xl">
                  <Icon as={AddIcon} />
                </Button>
              </InputLeftElement>
              <Input
                size="md"
                boxShadow={useColorModeValue("md", "dark-lg")}
                borderColor="rgba(0,0,0,0)"
                rounded="3xl"
                placeholder="Add address"
                _placeholder={{
                  pl: "5px",
                  color: useColorModeValue(
                    "placeholder.light",
                    "placeholder.dark"
                  ),
                }}
              />
            </InputGroup>

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
                        maxW="100%"
                        textOverflow="ellipsis"
                      >
                        1337 Got Root Avenue
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
