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
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { LocationIcon } from "lib/Icons/LocationIconSet";
import { useState } from "react";

export default function DeliveryAddress(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState("1");

  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box transition="0.5s ease-out">
      <Button
        p="0"
        size="md"
        onClick={onOpen}
        variant="ghost"
        colorScheme={colorMode == "light" ? "blackAlpha" : "gray"}
        color={textColor}
        {...props}
      >
        <HStack>
          <LocationIcon
            backgroundColor="rgba(0,0,0,0)"
            height="24px"
            width="24px"
            fill={textColor}
            transition="0.5s ease-out"
          />
          <Text maxW="100%" textOverflow="ellipsis">
            1337 Got Root Ave
          </Text>
        </HStack>
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
                boxShadow={colorMode == "light" ? "md" : "dark-lg"}
                borderColor="rgba(0,0,0,0)"
                rounded="3xl"
                placeholder="Add address"
                _placeholder={{
                  pl: "5px",
                  color:
                    colorMode == "light"
                      ? "placeholder.light"
                      : "placeholder.dark",
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
                        color={textColor}
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
    </Box>
  );
}
