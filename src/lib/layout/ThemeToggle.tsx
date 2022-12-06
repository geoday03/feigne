import {
  Box,
  Button,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = colorMode === "light" ? "text._light" : "text._dark";

  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );

  return (
    <Box>
      <IconButton
        ml="1rem"
        aria-label="theme toggle"
        color="brand.100"
        colorScheme={useColorModeValue("blackAlpha", "gray")}
        variant="ghost"
        backgroundColor={backgroundColor}
        icon={
          colorMode === "light" ? (
            <RiMoonFill size="20px" />
          ) : (
            <RiSunLine size="20px" />
          )
        }
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default ThemeToggle;
