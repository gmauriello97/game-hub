import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Project/Game/Search";

interface Props {
  onSearch: (v: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack paddingTop={2}>
      <Image fit="contain" src={logo} boxSize="10" />
      <Search onSearch={(value: string) => onSearch(value)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
