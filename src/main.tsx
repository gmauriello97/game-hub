import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./components/ui/theme";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento root non trovato nel DOM.");
}
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
