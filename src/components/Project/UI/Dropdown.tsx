import { Genre } from "@/types/genre";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { ALL_GENRE } from "../Strings/strings";

interface Props<T> {
  title: string;
  onChange: (g: T) => void;
  items: T[];
  defaultName: string;
}

const Selector = ({ title, items, onChange, defaultName }: Props<T>) => {
  return (
    <Menu>
      <MenuButton height="40px" as={Button} rightIcon={<FaChevronDown />}>
        {title || defaultName}
      </MenuButton>
      <MenuList maxHeight="70vh" overflow="auto">
        <MenuItem onClick={() => onChange(null)}>{defaultName}</MenuItem>
        {items.map((g) => (
          <MenuItem onClick={() => onChange(g)} key={g.id}>
            {g.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Selector;
