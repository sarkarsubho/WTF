import React from "react";
import { useEffect } from "react";
import { IoMdPin } from "react-icons/io";
import { Search2Icon } from "@chakra-ui/icons";
import { Cart } from "../components/Cart";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import "./home.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData, getLocation } from "../redux/app/action";
import Navbar from "../components/Navbar"
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
    <>
    <Navbar></Navbar>
    <Box >
        <Image
          w={"100%"}
          h={"60vh"}
          objectFit={"fill"}
          src="/homeHeading.png"
        />
      </Box>
      <Box w={"90%"} m={" 100px auto"} border={"3px solid white"} borderRadius={"7px"} p={"10px"} color={"white"} >
        <InputGroup size="md">
          <InputLeftElement>
          <Search2Icon  fontSize={"25px"}/>
          </InputLeftElement>
          <Input border={"none"} placeholder="Search"  fontSize={"25px"} />
          <InputRightElement >
            <Flex mr={"150px"}>
              <Button m={"0px 15px"} bgColor={"#be0808"} _hover={{bg:"#920909"}}  >
                <IoMdPin fontSize={"25px"} color={"white"} />
              </Button>
              <Button bgColor={"#be0808"} color={"white"} width={"110px"}  _hover={{bg:"#920909"}} fontSize={"20px"}>Clear</Button>
            </Flex>
          </InputRightElement>
        </InputGroup>
      </Box>
    
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
      <Box width={"75%"} height={"90vh"} overflow={"scroll"} overflowX={"hidden"} >
        {data.map((e) => {
          return <Link to={`/details/${e.user_id}`} key={e.user_id}><Cart  data={e}></Cart></Link>
          ;
        })}
      </Box>
    </Flex>
    </>
  );
};
