import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import {useDispatch} from "react-redux"
  import { Register } from '../redux/auth/register/action';

  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
  
 export default function RegisterCompo() {


    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [firstName,setFirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [email,setEmail]= useState("")
    const [password,setpassword]=useState("")
    const [showPassword, setShowPassword] = useState(false);

    const RegisterFunction=()=>{
        if( email!="" &&password!=""&&firstName!=""&&lastName!=""){
            dispatch(Register({ "firstName": firstName,"lastName":lastName,"email":email,"password":password, }))
            .then((res)=>{
                navigate("/login")
            })
            // console.log("helllo")
        }
       else{
         if(email==""||password==""||firstName==""||lastName==""){
            alert("Fields must not be empty")
         }
       }
    }
    
    return (
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>Sign up</Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text> */}
          </Stack>
          <Box rounded={'lg'}  bg={useColorModeValue('white', 'gray.700')}boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={(e)=>{setFirstName(e.target.value)}} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input onChange={(e)=>{setlastName(e.target.value)}} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input  onChange={(e)=>{setEmail(e.target.value)}} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input  onChange={(e)=>{setpassword(e.target.value)}} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() =>   setShowPassword((showPassword) => !showPassword) }>{showPassword ? <ViewIcon /> : <ViewOffIcon />}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={RegisterFunction} loadingText="Submitting"size="lg"bg={'#3c6a84'}color={'white'}_hover={{ bg: "#0087BA",}}> Sign up</Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link onClick={()=>navigate("/login")} color={'#3c6a84'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }