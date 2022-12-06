import {
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function ThemeToggle2(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = colorMode === "light" ? "text._light" : "text._dark";

  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );

  return (
    <Button
      w="100%"
      display={{ base: "flex", md: "none" }}
      leftIcon={
        colorMode === "light" ? (
          <RiMoonFill size="20px" />
        ) : (
          <RiSunFill size="20px" />
        )
      }
      onClick={toggleColorMode}
      colorScheme="gray"
      variant="ghost"
      {...props}
    >
      <Text color={useColorModeValue("text.light", "text.dark")} w="45%">
        Toggle theme
      </Text>
    </Button>
  );
}
