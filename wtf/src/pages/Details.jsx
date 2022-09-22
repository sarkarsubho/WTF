import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import "./Detail.css";
import { Benefits } from "../components/Benefits";
import { Terms } from "../components/Terms";
import { MembershipCart } from "../components/MembershipCart";

export const Details = () => {
  let { id } = useParams();
  let { data, terms } = useSelector((state) => state.app);
  let [currentData, setCurrentData] = useState({});
  const MembershipData=[
    {
      price:3000,
      description:"12 spring strength workout program following this plan to report your work out , build learn mess, and boost strength gain",
      title:"MTY (3 Month)"
    },
    {
      price:6999,
      description:"",
      title:"Slim your waist"
    },
    {
      price:9999,
      description:"",
      title:"Giant X"
    },
    {
      price:6999,
      description:"",
      title:"Beach Body"
    },
    {
      price:6999,
      description:"",
      title:"Fat To Fit"
    },
    {
      price:10000,
      description:"Change your body by adding lean muscles while losing fat and go from zero to zero a complete guide from start to finish.I am hare to show you the way",
      title:"MTY (12 Month)"
    },
    {
      price:4000,
      description:"Follow this plan to reboot your workout billion mass and boost strength gains",
      title:"MTY (6 Month)"
    },
    {
      price:1000,
      description:"Whether you are just starting--or  starting again-- this  Fast Track workout plan will help you drastically improve your Phsique and fitness level",
      title:"MTY (1 Month)"
    }
  ]
  useEffect(() => {
    if (id) {
      let tmp = data.find((el) => el.user_id === id);
      tmp && setCurrentData(tmp);
    }
  }, [id,data]);
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
            top={"30px"}
            left={"40px"}
            _hover={{ bg: "none" }}
          >
            {"Back"}{" "}
          </Button>
        </Link>
        <Image
          src={currentData?.cover_image}
          width={"100%"}
          height={"500px"}
        ></Image>
      </Box>

      {/* Title & Rating Section */}
      <Flex color={"white"} justifyContent={"space-between"} padding="50px">
        <Flex direction="column">
          <Heading as="h2" size="3xl" noOfLines={1}>
            {currentData?.gym_name}
          </Heading>
          <Flex alignItems={"center"} gap={"10px"} fontSize={"25px"}>
            <HiOutlineLocationMarker></HiOutlineLocationMarker>
            <Text>
              {" "}
              {currentData?.address1}, {currentData?.address2}
            </Text>
          </Flex>
        </Flex>
        <Flex bg={"#920909"} width={"200px"} h={"90px"} direction={"column"}>
          <Flex
            justifyContent={"center"}
            w={"100%"}
            fontSize={"25px"}
            gap={"5px"}
            padding={"10px"}
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

      <Flex padding={"40px"} color={"white"} textAlign={"left"}>
        <Flex w={"50%"} direction="column" gap={"60px"}>
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
            <Flex gap={"20px"} textAlign="center">
              {currentData?.benefits?.map((e) => {
                return <Benefits key={e.id} data={e.name}></Benefits>;
              })}
            </Flex>
          </Box>

          <Box>
            <Text fontSize="25px" mb={"40px"}>
              Why to choose WTF?
            </Text>
            <Flex gap={"20px"} flexWrap={"wrap"} textAlign="center">
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
          w={"50%"}
          bg={"#2E2E2E"}
          direction={"column"}
          borderRadius={"20px"}
          padding={"35px"}
        >
          <Heading as="h3" size="lg"  textAlign={"center"} mb={"25px"}>
            Choose Membership
          </Heading>

           {
   MembershipData.map((el,i)=>{
    return <MembershipCart key={i} data={el} plan={i}></MembershipCart>
   })

           }

        </Flex>
      </Flex>

      {/* Description and MemberShip Section */}
      <Flex
        bg={"#181818"}
        height={"250px"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Button
          color={"white"}
          borderRadius={"35px"}
          h={"60px"}
          fontSize={"20px"}
          w={"350px"}
          _hover={{ bg: "#920909" }}
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
          w={"350px"}
          _hover={{ bg: "none" }}
          variant={"outline"}
        >
          Book 1 day free session
        </Button>
      </Flex>
    </Box>
  );
};
