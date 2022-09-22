import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const MembershipCart = ({ data, plan }) => {
  return (
    <Box
      w="100%"
      cursor={"pointer"}
      _active={{opacity:"0.8"}}
      bgGradient={`linear(to-r,${data.color1},${data.color2})`}
      borderRadius={"10"}
      padding={"10px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} height={"fit-content"}>
        <Flex direction={"column"}>
          <Text fontSize={"15px"} fontWeight={600}> PLAN {plan + 1}</Text>
          <Flex gap={"20px"}>
            <Heading fontSize={"22px"} fontFamily={"cursive"}>
              WTF
            </Heading>
            <Heading color={"GrayText"} fontSize={"20px"}>{data.title}</Heading>
          </Flex>
        </Flex>
        <Box bg={`${data.color1}`} padding={"3px"} borderRadius={"5px"}> ₹ {data.price}</Box>
      </Flex>
    
      
      <Text mt={"20px"}>{data.description}</Text>
    </Box>
  );
};
