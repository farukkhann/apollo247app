import "./checkout.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const CheckOutCompo = () => {
    const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex
      minH={"100vh"}
      // align={'center'}
      // justify={'center'}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"20px"} maxW={"sm"}>
        <Stack>
          <Text fontSize={"lg"} color={"gray.600"}>
            Enter Address Details
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={5}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address (optional)</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>city</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Address2 (optional)</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>
          </Stack>
        </Box>
      </Stack>

      <Stack spacing={8} mx={"20px"} maxW={"sm"}>
        <Stack>
          <Text fontSize={"lg"} color={"gray.600"}>
            Enter payment Details
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={5}
        >
          <Stack spacing={4}>
            <HStack>
              <Select placeholder="payment option">
                <option value="option1">Credit Card</option>
                <option value="option2">Debit Card</option>
                <option value="option3">Paypal</option>
              </Select>
              {/* <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl> */}
            </HStack>
            <FormControl id="email">
              <FormLabel>Name on card</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Card Number</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>

              <HStack>
              <FormControl id="password">
              <FormLabel>Expiration</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Cvv</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl>
              </HStack>
           
            {/* <FormControl id="password">
              <FormLabel>Address2 (optional)</FormLabel>
              <InputGroup>
                <Input />
              </InputGroup>
            </FormControl> */}
            <Button onClick={()=>navigate("/thankyou")} loadingText="Submitting"size="lg"bg={'blue.400'}color={'white'} _hover={{    bg: 'blue.500', }}>
                Place Order
              </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
