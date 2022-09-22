import {  Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Terms = ({ data }) => {
   
  return (
    <Flex
      bg={"white"}
      h={"150px"}
      w={"150px"}
      borderRadius={"5px"}
      direction="column"
      alignSelf={"center"}
      justifyContent={"center"}
      padding={"15px"}
    >
      <Image src={data.icon} h="80px" w="80px" margin={"auto"}></Image>
      <Text color={"black"}>
        {data.name || "Terms Name"}
      </Text>
    </Flex>
  );
};
