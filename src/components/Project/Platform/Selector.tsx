import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { HStack, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import Dropdown from "../UI/Dropdown";
import { Platform } from "@/types/platform";
import { ALL_PLATFORM } from "../Strings/strings";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  platform: Platform | null | undefined;
  onChange: (p: Platform | null) => void;
}

const Selector = ({ platform, onChange }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <>
      {isLoading ? (
        // Mostra 20 CardSkeleton
        <Skeleton width="180px" height="40px"></Skeleton>
      ) : (
        // Mostra le card dei giochi
        <Dropdown
          title={platform?.name}
          onChange={onChange}
          items={platforms}
          defaultName={ALL_PLATFORM}
        />
      )}
    </>
  );
};

export default Selector;
