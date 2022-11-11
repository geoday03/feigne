import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = colorMode === "light" ? "text._light" : "text._dark";

  const backgroundColor = useColorModeValue(
    "background.light",
    "background.dark"
  );

  return (
    <IconButton
      ml="1rem"
      aria-label="theme toggle"
      color="brand.100"
      backgroundColor={backgroundColor}
      _hover={{
        backgroundColor: useColorModeValue(
          "background.light",
          "background.dark"
        ),
      }}
      icon={
        colorMode === "light" ? (
          <RiMoonFill size="20px" />
        ) : (
          <RiSunLine size="20px" />
        )
      }
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
