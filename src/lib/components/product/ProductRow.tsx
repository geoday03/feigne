import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  Center,
  Skeleton,
  Stack,
  SkeletonText,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "lib/app/hooks";
import { getProducts } from "lib/features/product-slice";
import { Product } from "lib/types/product";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductRow(props: {
  amount: number;
  rowTitle: string;
  category: string;
}) {
  const dispatch = useAppDispatch();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(
      getProducts({ category: props.category, resultLimit: props.amount })
    )
      .unwrap()
      .then((p) => setProducts(p));
  }, [dispatch, props.amount, props.category]);

  return (
    <Box pb="15px">
      <Text fontWeight="500" fontSize="22px" mb="10px">
        {props.rowTitle}
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={10}
      >
        {products.length > 0
          ? products.map((product: Product) => (
              <ProductCard
                key={nanoid()}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                reviewLength={
                  Object.keys(product.reviews.customerProfileNames).length
                }
              />
            ))
          : Array.from(Array(props.amount).fill(0).keys()).map(() => (
              <Stack key={nanoid()} p="25px">
                <Skeleton
                  height="240px"
                  w="40vw"
                  startColor={useColorModeValue(
                    "background.dark",
                    "background.light"
                  )}
                />

                <SkeletonText
                  height="6px"
                  startColor={useColorModeValue(
                    "background.dark",
                    "background.light"
                  )}
                />
              </Stack>
            ))}
      </Grid>
    </Box>
  );
}
