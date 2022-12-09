import {
  AspectRatio,
  border,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Select,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BrandedButton from "lib/components/buttons/BrandedButton";
import DeliveryAddress from "lib/components/user/DeliveryAddress";
import ShippingMethod from "lib/components/user/ShippingMethod";
import ProductRow from "lib/components/product/ProductRow";
import { LocationIcon } from "lib/Icons/LocationIconSet";
import LockIcon from "lib/Icons/LockIcon";
import TruckIcon from "lib/Icons/TruckIcon";
import PurchaseMenu from "lib/components/product/PurchaseMenu";
import { nanoid } from "nanoid";
import { useId, useRef } from "react";

export default function Product() {
  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );
  const borderColor = useColorModeValue("border.light", "border.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const uid = useId();

  return (
    <Box
      backgroundColor={backgroundColor}
      h="100%"
      w={{ sm: "100%", md: "95%", lg: "95%", xl: "85%" }}
      p="1rem"
      pt="60px"
      mx="auto"
    >
      <Flex direction={{ base: "column", md: "row" }} gap="3rem">
        <Box w="100%">
          <Image
            src="https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
            borderRadius="3xl"
            position="sticky"
            top="200"
            mx="auto"
          />
        </Box>

        <Box w="100%" minW="15rem">
          <Box borderBottomWidth="1px" borderColor={borderColor} pb="30px">
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

        <Box>
          <PurchaseMenu />
        </Box>
      </Flex>

      <Box mt="2rem" w="100%">
        <Box pb="1rem">
          <ProductRow
            amount={5}
            rowTitle="Recommended Items"
            category="amongUs"
          />
        </Box>

        <ProductRow
          amount={5}
          key={1}
          rowTitle="chungus edition"
          category="jewelery"
        />
      </Box>
    </Box>
  );
}
