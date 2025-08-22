import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" borderRadius="10px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default Score;
