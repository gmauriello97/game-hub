import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (text: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch></FaSearch>
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          type="text"
          variant="filled"
          placeholder="Search..."
        />
      </InputGroup>
    </form>
  );
};

export default Search;
