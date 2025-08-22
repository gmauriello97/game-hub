import {
  Card,
  CardBody,
  Skeleton as ChakraSkeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const Skeleton = () => {
  return (
    <Card height="250px" borderRadius={10} overflow="hidden">
      <ChakraSkeleton height="150px"></ChakraSkeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default Skeleton;
