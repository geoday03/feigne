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
import { useState } from "react";

export default function ProductQuantity(props: {
  quantity: number;
  id: string;
}) {
  const [quantity, setQuantity] = useState(props.quantity);

  const dispatch = useAppDispatch();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 100,
      precision: 0,
      onChange: (q: any) => {
        setQuantity(q);

        if (q == 0) {
          dispatch({ type: "cart/remove", payload: props.id });
          setQuantity(1);
        }
      },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Button size="sm" {...dec}>
        {quantity == 1 ? (
          <Icon
            as={DeleteIcon}
            fill={useColorModeValue("text.light", "text.dark")}
          />
        ) : (
          "-"
        )}
      </Button>

      <Input {...input} w="3.5rem" />

      <Button size="sm" {...inc}>
        +
      </Button>
    </HStack>
  );
}
