import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";


const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Box   w={"100%"} h={"70px"}  color={"#a38e8e"}  bg={colorChange ? "#0d0d0d" :" "} position={"fixed"} zIndex={10} >
      
      <Flex  h={"60px"} alignItems={"center"} justifyContent={"space-between"} p={"0 20px"}>
        
        <Flex h={"98%"} w={["40%","30%"]} gap={"10px"} mt={["8px",0]}>
          <Box display={["block","block","none","none"]}>
             <BiCategory color="white" fontSize={"50px"}  ></BiCategory>
          </Box>
         
          <Image h={"98%"} objectFit={"fit"} src="data:image/png;base64,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" />
        </Flex>

        <Flex w={"40%"} justifyContent={"space-between"} alignItems={"center"} gap={"10px"} display={["none","none","flex","flex"]}>
          <Box>Fitness</Box>
          <Box>Nutration</Box>
          <Box>
            <Link to="/">Gyms</Link>
          </Box>
          <Box>Become WTF Partner</Box>
          <Box>About Us</Box>
          <Box>
            <Button bg={"#be0808"} _hover={{bg:"#920909"}}  fontSize={"20px"}>Login</Button>
          </Box>
        </Flex>

        <Button display={["block","block","none","none"]} bg={"#be0808"} _hover={{bg:"#920909"}}  fontSize={"20px"}>Login</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
