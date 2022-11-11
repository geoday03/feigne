import { Button, useColorModeValue } from "@chakra-ui/react";
import TruckIcon from "lib/Icons/TruckIcon";

export default function DeliveryEstimate() {
  return (
    <Button
      size="md"
      p="0"
      backgroundColor="rgba(0,0,0,0)"
      onFocus={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)")
      }
      _hover={{ backgroundColor: "rgba(0,0,0,0)" }}
      leftIcon={
        <TruckIcon
          backgroundColor="rgba(0,0,0,0)"
          height="24px"
          width="24px"
          fill={useColorModeValue("text.light", "text.dark")}
          mr="2.5px"
        />
      }
      color={useColorModeValue("text.light", "text.dark")}
    >
      Estimated Delivery 1d 4h
    </Button>
  );
}
