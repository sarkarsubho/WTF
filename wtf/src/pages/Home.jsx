import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Cart } from "../components/Cart";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import "./home.css"
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, setData] = useState([]);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        setTerms(res.data.terms);
      });
  }, []);
  return (
    <Flex>
      <Flex color={"white"} direction={"column"} gap={"20px"} textAlign={"left"} padding={"30px"} width={"25%"}>
        <Heading as="h4" size="md">
          Location
        </Heading>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoMdSearch fontSize={"30px"}></IoMdSearch>}
          />
          <Input type="tel" background={"#424242"} placeholder="Enter Location" />
        </InputGroup>

        <Heading as="h4" size="md">
          Price
        </Heading>
        <Flex gap={"30px"}>
          <Input placeholder="Min" background={"#424242"}></Input>
          <Input placeholder="Max" background={"#424242"}></Input>
        </Flex>
        <Heading as="h4" size="md">
          Cities
        </Heading>
        <Select placeholder="Select option" background={"#424242"}>
          <option value="noida">Noida</option>
          
        </Select>
      </Flex>
      <Box width={"75%"}>
        {data.map((e) => {
          return <Link to={`/details/${e.user_id}`} key={e.user_id}><Cart  data={e}></Cart></Link>
          ;
        })}
      </Box>
    </Flex>
  );
};
