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
  Text,
} from "@chakra-ui/react";
import { useAppDispatch } from "lib/app/hooks";

export default function ProductQuantity(props: {
  quantity: number;
  setQuantity: Function;
  id: string;
}) {
  const dispatch = useAppDispatch();

  const { quantity, setQuantity } = props;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantity,
      min: 0,
      max: 100,
      precision: 0,
      onChange: (q: any) => {
        setQuantity(q);

        if (q == 0) {
          dispatch({ type: "cart/remove", payload: props.id });
        }
      },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const borderColor = useColorModeValue("border.light", "border.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <HStack w="full">
      <Button size="sm" {...dec}>
        {quantity == 1 ? (
          <Icon
            as={DeleteIcon}
            fill={useColorModeValue("text.light", "text.dark")}
            boxSize="12px"
          />
        ) : (
          <Text boxSize="12px">-</Text>
        )}
      </Button>

      <Text p="6px" rounded="full" color={textColor}>
        {quantity}
      </Text>

      <Button size="sm" {...inc}>
        +
      </Button>
    </HStack>
  );
}
