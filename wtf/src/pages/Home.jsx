import React from "react";
import { useEffect } from "react";

import { Cart } from "../components/Cart";
import {
  Box,
  Divider,
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
import { useDispatch, useSelector } from "react-redux";
import { getData, getLocation } from "../redux/app/action";
export const Home = () => {
  const data=useSelector(state=>state.app.data);
  const location=useSelector(state=>state.app.location);
  console.log("location",location)
  const dispatch=useDispatch();
  // const [data, setData] = useState([]);
  // const [terms, setTerms] = useState([]);
  
  const handleChange=(val)=>{
    console.log(val);
    dispatch(getLocation(val))
  }
  useEffect(() => {

   dispatch(getData())
  }, [dispatch]);
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
        <Select placeholder="Select option" background={"#424242"} onChange={(e)=>handleChange(e.target.value)}>
          <option value="noida">Noida</option>
          
        </Select>

       {location.length>0 && <Flex direction={"column"} gap={"20px"}>
        <Heading as="h4" size="md">
          Location
        </Heading>
        <Box background={"#424242"}  borderRadius={"10px"} border={"3px solid gray"}>
           {
          location.map((e,i)=>{
            return <Box key={i} >
              <Box padding={"10px"}>{e.address1},{e.address2} </Box>
              
              {/* <hr></hr> */}
              <Divider></Divider>
            </Box>
          })
         }
        </Box>
        
        </Flex>}
      </Flex>
      <Box width={"75%"} height={"90vh"} overflow={"scroll"}>
        {data.map((e) => {
          return <Link to={`/details/${e.user_id}`} key={e.user_id}><Cart  data={e}></Cart></Link>
          ;
        })}
      </Box>
    </Flex>
  );
};
