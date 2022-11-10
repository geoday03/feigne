import { extendTheme, useColorModeValue } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  styles: {
    global: (props: string[]) => ({
      body: {
        bg: useColorModeValue("background.light", "background.dark"),
      },
    }),
  },
  fonts,
  colors,
  config,
  components,
});

export default customTheme;
