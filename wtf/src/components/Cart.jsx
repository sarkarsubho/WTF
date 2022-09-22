import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import "./cart.css";
import { AiOutlineStar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Cart = ({ data }) => {
  console.log("from cart", data);
  return (
    
    <Flex className="cart">
      
      <Image className="image"
        width="50%"
        objectFit="cover"
        src={data.cover_image}
        alt={"coverPic"}
      ></Image>
      <Flex p={"20px"} direction={"column"} gap={"20px"} width={"50%"} justifyContent={"space-between"}>
        <Flex direction={"column"} gap={"20px"}>
          <Heading as="h4" size="md">
          {data.gym_name}
        </Heading>
       <Flex>
        <AiOutlineStar></AiOutlineStar>
        <AiOutlineStar></AiOutlineStar>
        <AiOutlineStar></AiOutlineStar>
        <AiOutlineStar></AiOutlineStar>
        <AiOutlineStar></AiOutlineStar>
       </Flex>
       <Heading as="h4" size="sm">
          {data.address1} , {data.address2}
        </Heading>
        <Flex alignItems={"center"} gap={"3px"}>
          <FaLocationArrow color="green" fontSize={"15px"}></FaLocationArrow>
          <Heading as="h4" size="sm">
          {data.duration_text} | {data.distance_text}
        </Heading>
        </Flex>
        </Flex>
        

        <Flex justifyContent={"space-between"}>
        <Heading as="h4" size="md" color={"#E2B411"}>
          
          {data.plan_price || "₹ 3600 for 3 Months"}
        </Heading>
        <Button background={"#920909"}> Book Now</Button>
        </Flex>
      </Flex>
      
    </Flex>
    
  );
};
