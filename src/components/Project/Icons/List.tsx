import { Platform, Game } from "@/types/game";
import React from "react";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const List = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          opacity={0.4}
          key={Math.random() + platform.id}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};

export default List;
