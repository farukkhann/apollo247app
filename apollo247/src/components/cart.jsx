import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartData } from "../redux/cart/action"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import "./cart.css"
import { CloseIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { removeCart } from "../redux/cart/action"


export const Cartcomo = () => {
    const dispatch = useDispatch()
    const [count, setcount] = useState(1)
    const [total, setTotal] = useState(0)
    const ref = useRef()
    useEffect(() => {
        dispatch(getCartData()).then((res) => {
            console.log(res)
        })
    }, [])
    const data = useSelector((state) => state.cart.cart)
    console.log(data)
    useEffect(() => {
        let value = 0
        data.map((ele) => value = Number(value) + Number(ele.price))
        console.log(value)
        setTotal(value)
    }, [count])
    let value = 0
    data.map((ele) => value = Number(value) + Number(ele.price))
    console.log(value)

    console.log(data)
    return < Box width={"95%"} marginLeft={"50px"}>
        <Flex>
            <Box width={"65%"}>
                <div id="head">
                    <Text>MY CART</Text>
                    <hr />
                </div>

                {data?.map((ele) =>
                    <div id="container">


                        <Flex id="container2" >

                            <Box marginRight={"10px"} id="flex1" >
                                <img id="image" src={ele.image} alt="" />
                            </Box>
                            <Box >
                                <Flex id="flex2" justifyContent={"space-around"}>
                                    <Text>{ele.title}</Text>
                                    <CloseIcon  _hover={{"cursor":"pointer"}} onClick={() => dispatch(removeCart(ele.id)).then(()=>dispatch(getCartData()).then(()=>setcount(count+1)))} />
                                </Flex>
                                <Flex justifyContent={"space-between"}>
                                    {/* <Flex>
                                        <Button onClick={() => setquantity(quantity + 1)}>+</Button>
                                        <Text >{quantity}</Text >
                                        <Button onClick={() => setquantity(quantity - 1)}>-</Button>
                                    </Flex> */}
                                    <Flex>
                                        {/* {setTotal(total + ele.price)} */}
                                        <Text>Price:{ele.price}</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                            <hr />
                        </Flex>

                    </div>
                )}

            </Box>

            <Box padding={"5"} >
                <Box marginLeft={"50px"} marginTop={"100px"}>
                <Text >Cart Breakdown</Text>
                <Text>total:{total}</Text>
                <Button colorScheme={"gray"}>Checkout</Button>
                </Box>
               
            </Box>

        </Flex>


    </Box>

}