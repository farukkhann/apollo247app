
import "./navbar.css";
// export const Navbar=()=>{
//     return <nav>
//  <div>navbar</div>,
//         <img src="https://newassets.apollo247.com/images/ic_logo.png" alt="" />
//         </nav>
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,

} from "@chakra-ui/react"   ;
import { Link, useNavigate } from "react-router-dom";
import {FaBluetooth, FaShoppingCart} from "react-icons/fa"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export  const  Navbar=()=> {
  const navigate=useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box height={100} id="navbar" bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.700')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box id="logo">
              {/* <Link to={"/"}> */}
                <Image onClick={()=>navigate("/")}  src="https://newassets.apollo247.com/images/ic_logo.png"></Image>
              {/* </Link> */}
            </Box>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                {/* <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button> */}
                {/* <Text>doctor</Text> */}
                <Box id="options">
                    <Text >DOCTORS</Text>
                    <Text>Consult online</Text>
                </Box>
                <Box id="options" >
                    <Text >
                       <Link  to={"/product"}>PHARMANCY</Link> 
                    </Text>
                    <Text>
                    <Link to={"/product"}>Medicines  other products</Link> 
                    </Text>
                </Box>
                <Box id="options" >
                    <Text>
                        LAB TESTS
                    </Text>
                    <Text>
                        Health check-ups
                    </Text>
                </Box>
                <Box id="options" >
                    <Text>
                        CIRCLE
                    </Text>
                    <Text>
                        Free delivery  more
                    </Text>
                </Box>
                <Box>
                  <Link to={"/cart"}  >
                  <FaShoppingCart />
                  </Link>
                </Box>
                
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }