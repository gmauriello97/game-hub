import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <HStack>
      <Image fit="contain" src={logo} boxSize="14" />
      <p>Navbar</p>
    </HStack>
  );
};

export default Navbar;
