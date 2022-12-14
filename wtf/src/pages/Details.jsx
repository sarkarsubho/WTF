import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import "./Detail.css";
import { Benefits } from "../components/Benefits";
import { Terms } from "../components/Terms";
import { MembershipCart } from "../components/MembershipCart";
import { getData } from "../redux/app/action";
import {MembershipData} from "../data/MembershipData"
export const Details = () => {
  let { id } = useParams();
  let { data, terms } = useSelector((state) => state.app);
  let [currentData, setCurrentData] = useState({});
  const dispatch=useDispatch();
  
  useEffect(() => {
    if (id) {
      let tmp = data.find((el) => el.user_id === id);
      tmp && setCurrentData(tmp);
    }
  }, [id, data]);
  useEffect(()=>{
   if(data.length===0){
    dispatch(getData())
   }
  },[data,dispatch])
  console.log(currentData, terms);
  return (
    <Box>
      <Box>
        <Link to="/">
          <Button
            variant="ghost"
            color={"white"}
            leftIcon={<AiOutlineLeft></AiOutlineLeft>}
            position={"absolute"}
            fontSize={"25px"}
            top={"40px"}
            left={"40px"}
            _active={{bg:"none"}}
            _hover={{ bg: "none" }}
          >
            {"Back"}{" "}
          </Button>
        </Link>
        <Image
         objectFit={"fill"}
          src={currentData?.cover_image}
          width={"100%"}
          height={"500px"}
        ></Image>
      </Box>

      {/* Title & Rating Section */}
      <Flex color={"white"} justifyContent={"space-between"} padding={["10px","50px"]}>
        <Flex direction="column">
          <Heading as="h2" size={["md","3xl"]} noOfLines={1}>
            {currentData?.gym_name}
          </Heading>
          <Flex alignItems={"center"} gap={"10px"} fontSize={["15px","25px"]}>
            <HiOutlineLocationMarker ></HiOutlineLocationMarker>
            <Text>
              {" "}
              {currentData?.address1}, {currentData?.address2}
            </Text>
          </Flex>
        </Flex>
        <Flex bg={"#920909"} width={["150px","200px"]} h={["70px","90px"]} direction={"column"}>
          <Flex
            justifyContent={"center"}
            w={"100%"}
            fontSize={"25px"}
            gap={"5px"}
            padding={["5px","10px"]}
          >
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </Flex>
          <Text fontSize={"22px"}> {currentData?.rating} Ratings</Text>
        </Flex>
      </Flex>
      {/* Title & Rating Section */}

      {/* Description and MemberShip Section */}

      <Flex padding={"40px"} color={"white"} textAlign={"left"} justifyContent={"space-between"} direction={["column","column","row","row"]} gap={"30px"}>
        <Flex w={["100%","100%","50%","50%"]} direction="column" gap={"60px"}>
          <Box>
            <Text fontSize="25px" mb={"40px"}>
              Description
            </Text>
            <Text fontSize={"18px"} textAlign={"justify"}>
              {currentData?.description}
            </Text>
          </Box>

          <Box>
            <Text fontSize="25px" mb={"40px"}>
              Facilities
            </Text>
            <Flex gap={"20px"} textAlign="center" flexWrap={"wrap"} >
              {currentData?.benefits?.map((e) => {
                return <Benefits key={e.id} data={e.name}></Benefits>;
              })}
            </Flex>
          </Box>

          <Box>
            <Text fontSize="25px" mb={"40px"}>
              Why to choose WTF?
            </Text>
            <Flex gap={"20px"} flexWrap={"wrap"} textAlign="center" justifyContent={["center","start"]}>
              {terms?.map((e) => {
                return <Terms key={e.uid} data={e}></Terms>;
              })}
            </Flex>
          </Box>

          <Box>
            <Text fontSize="25px" mb={"40px"}>
              How it works?
            </Text>
            <Flex direction={"column"} gap="15px">
              <Flex gap={"3px"} alignItems={"center"}>
                <Image src={"/man.png"}></Image>
                <Text fontSize={"18px"}>
                  {" "}
                  Pick membership start date and complete your subscription
                  process by cicking buy now below.
                </Text>
              </Flex>
              <Flex gap={"3px"} alignItems={"center"}>
                <Image src={"/man.png"}></Image>
                <Text fontSize={"18px"}>
                  {" "}
                  A dedicated general trainer willbe assigned after you have
                  taken your subscription.
                </Text>
              </Flex>
              <Flex gap={"3px"} alignItems={"center"}>
                <Image src={"/man.png"}></Image>
                <Text fontSize={"18px"}>
                  {" "}
                  Explore WTF and start your fitness jorney .
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Flex
          w={["100%","100%","45%","45%"]}
          bg={"#2E2E2E"}
          direction={"column"}
          borderRadius={"20px"}
          padding={"35px"}
          gap={"20px"}

        >
          <Heading as="h3" size="lg" textAlign={"center"} mb={"25px"}>
            Choose Membership
          </Heading>

          {MembershipData.map((el, i) => {
            return <MembershipCart key={i} data={el} plan={i}></MembershipCart>;
          })}
        </Flex>
      </Flex>

      {/* Description and MemberShip Section */}
      <Flex
        bg={"#181818"}
        height={"250px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        direction={["column","column","row","row"]}
        padding={"30px"}
      >
        <Button
          color={"white"}
          borderRadius={"35px"}
          h={"60px"}
          fontSize={"20px"}
          w={["240px","350px"]}
          _hover={{bg:"#750309"}}
          bg={"#920909"}
        >
          {" "}
          Buy now
        </Button>
        <Button
          color={"white"}
          borderRadius={"35px"}
          h={"60px"}
          fontSize={"20px"}
          w={["240px","350px"]}
          _hover={{ bg: "none" }}
          variant={"outline"}
        >
          Book 1 day free session
        </Button>
      </Flex>
    </Box>
  );
};
