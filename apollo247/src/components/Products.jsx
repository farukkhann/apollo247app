
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getFilteredProducts, getProducts } from "../redux/products/action"

import {
    Heading,
    Flex,
    Text,
    Input,
    Box,
    VStack,
    Button,
    Image,
    Spinner


} from "@chakra-ui/react"
import { MdLocalOffer } from "react-icons/md"
import { RiCapsuleFill } from "react-icons/ri"
import { Search2Icon } from "@chakra-ui/icons"
import "./Products.css"
import { Crousel } from "./crousel/crousel"
import { addToCart } from "../redux/cart/action"

export const ProductsCompo = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    // console.log(value.products.loading)
    if (value.products.loading) {
        return <Spinner
           marginLeft={"40%"}
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    }
    else {



        return <>
            {/* <h1>products here</h1> */}
            <Box id="outerContainer1">
                <Flex id="underNav">
                    <Text>Baby care</Text>
                    <Text>Health Nutrition</Text>
                    <Text>Women care</Text>
                    <Text>Personal care</Text>
                    <Text>Ayurveda</Text>
                    <Text>Health Devices</Text>
                    <Text>Home Essential</Text>
                    <Text>Apollo life</Text>
                    <Text>Health Condition</Text>
                </Flex>
            </Box>
            <hr />
            <Flex id="outerContainer2" >
                <Box width={"70%"} >
                    <Flex id="searchsys">
                        <Input id="searchBox" variant={"filled"} placeholder="Search Medicine Brands and more"></Input>
                        <Search2Icon _hover={{ "cursor": "pointer" }} borderRadius={"7px"} boxSize={"10"} padding={"9px"} background={"gray.100"} marginTop={"6px"} />
                    </Flex>
                    <Box id="krosel">
                        <Crousel />
                    </Box>
                </Box>
                <Box id="offers" >
                    <Flex id="offersMain">
                        <MdLocalOffer size={"40px"} />
                        <Text>Secial offers</Text>
                    </Flex>
                    <Flex borderRadius={"10px"} backgroundColor={"gray.100"} id="upload">
                        <Box>
                            <Text>Place order via prescriptions</Text>
                            <Button _hover={"none"} color={"white"} background={"orange.300"}>UPLOAD</Button>
                        </Box>
                        <Box>
                            <Image src="https://newassets.apollo247.com/images/ic_prescription_pad.svg" ></Image>
                        </Box>
                    </Flex>
                    <Flex borderRadius={"10px"} backgroundColor={"gray.100"} id="orders">
                        <RiCapsuleFill id="icon" />
                        <Text>Your Orders</Text>
                    </Flex>
                </Box>
            </Flex>
            <Box id="outcards">
                <Text id="catDetails">SHOP BY HEALTH CONDITIONS</Text>
                <hr />
                <Flex padding={"10px"} justifyContent={"space-around"}>
                    <Flex id="card1" onClick={()=>dispatch(getFilteredProducts("covid_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png"></Image>
                        <Text>Covid care</Text>
                    </Flex>
                    <Flex id="card1"  onClick={()=>dispatch(getFilteredProducts("covid_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png"></Image>
                        <Text>Covid Protection</Text>
                    </Flex>
                    <Flex id="card1"  onClick={()=>dispatch(getFilteredProducts("diabities_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png"></Image>
                        <Text>Diabities care</Text>
                    </Flex>
                    <Flex id="card1"  onClick={()=>dispatch(getFilteredProducts("mind_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg"></Image>
                        <Text>Mind Care</Text>
                    </Flex>
                    <Flex id="card1"  onClick={()=>dispatch(getFilteredProducts("liver_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg"></Image>
                        <Text>Liver Care</Text>
                    </Flex>
                    <Flex id="card1" onClick={()=>dispatch(getFilteredProducts("cardio_care"))}>
                        <Image src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png"></Image>
                        <Text>Cardiac</Text>
                    </Flex>
                </Flex>
            </Box>
            <div id="mainProducts" >
                <div id="mainFlex">
                    {value?.products?.products.map((ele) =>
                        <div id="proCard" key={ele.id}  >
                            <Image id="prodImage" src={ele.image}></Image>
                            <div id="prodInfo">
                            <Text id="prodTitle">{ele.title}</Text>
                            <Text id="prodPrice">MRP Rs. {ele.price}</Text>
                            </div>
                            <div>
                            <Text  id="AddtoCart" onClick={()=>dispatch(addToCart(ele))}>Add to Cart</Text>
                            </div>
          
                        </div>
                    )}

                </div>
            </div>


            {/* <App/> */}
        </>
    }
}

// import React from 'react';
// import 'antd/dist/antd.css';
// // import './index.css';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// // import { Dropdown, Input, Menu, Space } from 'antd';
// const menu = (
//   <Menu
//     items={[
//       {
//         key: '1',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//             1st menu item
//           </a>
//         ),
//       },
//       {
//         key: '2',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//             2nd menu item (disabled)
//           </a>
//         ),
//         icon: <SmileOutlined />,
//         disabled: true,
//       },
//       {
//         key: '3',
//         label: (
//           <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//             3rd menu item (disabled)
//           </a>
//         ),
//         disabled: true,
//       },
//       {
//         key: '4',
//         danger: true,
//         label: 'a danger item',
//       },
//     ]}
//   />
// );

// const App = () => (
//   <Dropdown overlay={menu}>
//     <a onClick={(e) => e.preventDefault()}>
//       <Space>
//         Hover me
//         <DownOutlined />
//       </Space>
//     </a>
//   </Dropdown>
// );

// export default App;