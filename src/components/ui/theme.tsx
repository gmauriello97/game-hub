import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // <- imposta il tema iniziale su "dark"
};

const theme = extendTheme({ config });

export default theme;
