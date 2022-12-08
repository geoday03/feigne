import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  NumberInput,
  SlideFade,
  useDisclosure,
  useNumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ProductQuantity(props: {
  quantity: number;
  setQuantity: any;
}) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: props.quantity,
      min: 0,
      max: 100,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [quantity, setQuantity] = useState(props.quantity);

  useEffect(() => console.log(quantity), [quantity]);

  return (
    <HStack>
      <Button size="sm" {...dec}>
        -
      </Button>

      <Input {...input} value={quantity} maxW="4.5rem">
        {quantity}
      </Input>

      <Button size="sm" {...inc}>
        +
      </Button>
    </HStack>
  );
}
