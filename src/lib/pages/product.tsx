import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DeliveryLocation from "lib/components/AddressModal";
import ProductRow from "lib/components/product/ProductRow";
import { LocationIcon } from "lib/Icons/LocationIconSet";
import LockIcon from "lib/Icons/LockIcon";
import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const router = useRouter();
  const { pid } = router.query;

  let quantity = [];

  for (let i = 2; i < 101; i++) {
    quantity.push(i);
  }

  return (
    <Box
      backgroundColor={useColorModeValue("background.light", "background.dark")}
      h="100%"
      w="75%"
      pt="60px"
      mx="auto"
    >
      <Flex direction="row" gap="3rem">
        <Box w="100%">
          <Image
            src="https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
            borderRadius="3xl"
            minW="700px"
          />
        </Box>

        <Box w="100%">
          <Box borderBottomWidth="1px" borderBottomColor="gray.300" pb="30px">
            <Text fontSize="2rem" mb="10px">
              Product Title
            </Text>
            <Text fontWeight="350px" fontSize="1.5rem">
              $3,523
            </Text>
          </Box>

          <Text fontSize="17px" fontWeight="700" mt="15px">
            About this item
          </Text>
          <Text mt="15px">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Text>
        </Box>

        <Box
          rounded="2xl"
          borderWidth="1px"
          borderColor="gray.300"
          w="55%"
          p="15px"
        >
          <Text fontWeight="350px" fontSize="1.5rem" mb="20px">
            $3,523
          </Text>

          <Text fontSize="15px" mb="20px">
            FREE delivery <strong>TONIGHT</strong>. Order within{" "}
            <Text color={useColorModeValue("green", "#4af179")}>
              69 seconds
            </Text>
          </Text>

          <Box mb="20px">
            <Text fontSize="15px" fontWeight="500">
              Deliver to John Doe
            </Text>
            <DeliveryLocation />
          </Box>

          <Flex fontSize="16px" fontWeight="500" gap="5px" mb="3px">
            Quantity
            <Text color={useColorModeValue("green", "#4af179")}> IN STOCK</Text>
          </Flex>
          <Select placeholder="1" w="30%" mb="45px">
            {quantity.map((i) => (
              <option>{i}</option>
            ))}
          </Select>

          <Button
            w="100%"
            bgGradient="linear(to-l, brand.primary, #FF0080)"
            mb="10px"
            rounded="xl"
          >
            Add to cart
          </Button>
          <Button
            w="100%"
            bgGradient="linear(to-l, brand.primary, #FF0080)"
            rounded="xl"
            mb="10px"
          >
            Buy now
          </Button>

          <Center gap="5px" pt="10px">
            <LockIcon height="20px" w="25px" />
            <Text fontSize="20px" fontWeight="370">
              Secure transaction
            </Text>
          </Center>
        </Box>
      </Flex>

      <Box mt="2rem">
        <ProductRow amount={8} rowTitle="Recommended Items" />
      </Box>
    </Box>
  );
}
