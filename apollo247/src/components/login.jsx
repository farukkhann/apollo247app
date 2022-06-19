import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { login } from "../redux/auth/login/action";
export default function Logincompo() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const  LoginFunction=()=>{
        if(email==""&&password==""){
            alert("Field must not be empty")
        }
       else{
        dispatch(login({"password":password,"email":email})).then(()=>{
            navigate("/")
        })
       
       }
    }

  return (
    <Flex minH={"100vh"}align={"center"}justify={"center"}bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"}bg={useColorModeValue("white", "gray.700")}boxShadow={"lg"}p={8}>
          <Stack spacing={4}>


            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)}   type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={(e)=>setpassword(e.target.value)}  type="password" />
            </FormControl>

            <Stack spacing={10}>
              <Stack direction={{ base: "column", sm: "row" }}align={"start"}justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Link onClick={() => navigate("/register")} color={"blue.400"}>Don't have an Account?</Link>
              </Stack>

              <Button onClick={LoginFunction} bg={"#3c6a84"} color={"white"} _hover={{ bg: "#0087BA" }}>{" "}Sign in</Button>


            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
