import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "lib/app/hooks";
import ProductCard from "./ProductCard";
import { getProducts } from "lib/features/products/productSlice";
import { useEffect } from "react";

export default function ProductRow(props: {
  amount: number;
  rowTitle: string;
  category: string;
}) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts({ resultLimit: props.amount, category: "jewelry" }));
  }, [dispatch]);

  return (
    <Box width="60%" mx="6%" zIndex="2" mt="8px">
      <Text
        fontFamily="body"
        fontWeight="600"
        fontSize="lg"
        color={useColorModeValue("text.light", "text.dark")}
        width="250px"
        p="8px"
      >
        {props.rowTitle}
      </Text>

      {Object.keys(products).length > 0 ? (
        <Flex direction="row" gap="2%" alignContent="center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </Flex>
      ) : (
        <Box>nothing here</Box>
      )}
    </Box>
  );
}
