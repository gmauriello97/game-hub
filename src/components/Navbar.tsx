import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justify="space-between">
      <Image fit="contain" src={logo} boxSize="10" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
