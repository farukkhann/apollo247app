import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
export const Thankyou = () => {
    const navigate = useNavigate();
    return <>
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order placed successfully
      </Heading>
      <Text color={'gray.500'}>
        Thank you for shopping with us. We will deliver your order shortly.
      </Text>
      <Button onClick={()=>navigate("/")} _hover={"none"} color={"white"} bg={"#02475B"}>Home</Button>
    </Box>
    </>
}