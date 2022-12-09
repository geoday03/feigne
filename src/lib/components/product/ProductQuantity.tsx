import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  SlideFade,
  useColorModeValue,
  useDisclosure,
  useNumberInput,
} from "@chakra-ui/react";
import { useAppDispatch } from "lib/app/hooks";
import { useEffect, useState } from "react";

export default function ProductQuantity(props: {
  quantity: number;
  id: string;
}) {
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (quantity == 0) {
      dispatch({ type: "cart/remove", payload: props.id });
      setQuantity(props.quantity);
    }
  }, [dispatch, props.id, props.quantity, quantity]);

  return (
    <HStack>
      <Button
        size="sm"
        onClick={() => {
          return setQuantity(quantity - 1);
        }}
      >
        {props.quantity == 1 || props.quantity == 0 ? (
          <Icon
            as={DeleteIcon}
            fill={useColorModeValue("text.light", "text.dark")}
          />
        ) : (
          "-"
        )}
      </Button>

      <Input w="3.5rem" defaultValue={quantity} />

      <Button size="sm" onClick={() => setQuantity(quantity + 1)}>
        +
      </Button>
    </HStack>
  );
}
