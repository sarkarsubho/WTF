import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Benefits = ({ data }) => {
  return (
    <Flex direction={"column"} gap="6px" justifyContent={"center"} alignItems={"center"}>
      <Box h="70px" w="70px" bg={"#920909"} borderRadius={"5px"}></Box>
      <Text>{data}</Text>
    </Flex>
  );
};
