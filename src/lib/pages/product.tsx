import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { Product as ProductType } from "lib/types/product";
import { getProduct } from "lib/features/product-slice";
import { useAppDispatch } from "lib/app/hooks";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import PurchaseMenu from "lib/components/product/PurchaseMenu";

export default function Product() {
  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );
  const borderColor = useColorModeValue("border.light", "border.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const router = useRouter();

  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ProductType>();

  const id = router.query.pid;

  useEffect(() => {
    dispatch(getProduct(id as string))
      .unwrap()
      .then((p) => setProduct(p));
  }, [dispatch, id]);

  return (
    <Box
      backgroundColor={backgroundColor}
      h="100%"
      w={{ sm: "full", md: "95%", lg: "95%", xl: "85%" }}
      p="1rem"
      pt="60px"
      mx="auto"
    >
      <NextSeo
        title={product?.title || "Product Title"}
        description={product?.description}
        openGraph={{
          url: `https://feigne.app/${product?.id}` || "https://feigne.app/404",
          title: product?.title,
          description: product?.description || "Product description",
          images: [
            {
              url: product?.image || "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      />

      <Flex direction={{ base: "column", md: "row" }} gap="3rem">
        <Box w="100%" rounded="3xl">
          <Center h="full" display={{ base: "none", md: "none", lg: "flex" }}>
            <Image
              src={
                product?.image ||
                "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
              }
              borderRadius="3xl"
              position="sticky"
              top="200"
              rounded="xl"
            />
          </Center>

          <Image
            src={
              product?.image ||
              "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
            }
            borderRadius="3xl"
            position="sticky"
            top="200"
            mx={{ base: "auto", md: "unset" }}
            display={{ base: "flex", md: "flex", lg: "none" }}
          />
        </Box>

        <Box w="100%" minW="15rem">
          <Box borderBottomWidth="1px" borderColor={borderColor} pb="30px">
            <Text fontSize="2rem" mb="10px">
              {product?.title || "Product Title"}
            </Text>

            <Text fontWeight="350px" fontSize="1.5rem">
              {`${product?.price}` || "$3, 523"}
            </Text>
          </Box>

          <Text fontSize="17px" fontWeight="700" mt="15px">
            About this item
          </Text>
          <Text mt="15px">
            {product?.description ||
              `Contrary to popular belief, Lorem Ipsum is not simply random text.
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
            Rackham.`}
          </Text>
        </Box>

        <Box>
          <PurchaseMenu
            price={product?.price}
            title={product?.title}
            image={product?.image}
          />
        </Box>
      </Flex>

      <Box w="100%" mt="2rem">
        <ProductRow
          key={nanoid()}
          amount={5}
          rowTitle="Recommended Items"
          category="ramSticks"
        />

        <ProductRow
          amount={5}
          key={nanoid()}
          rowTitle="Jewelry Collection"
          category="jewelry"
        />
      </Box>
    </Box>
  );
}
