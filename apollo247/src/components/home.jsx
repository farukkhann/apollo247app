import {
    Heading,
    Flex,
    Box,
    Text,
    Image,
    UnorderedList,
    ListItem

} from "@chakra-ui/react"
import { Crousel } from "./crousel/crousel"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { RiMessageLine } from "react-icons/ri"
import { IoCallOutline } from "react-icons/io5"
import { BsChatRightText } from "react-icons/bs"
import { MdOutlineCoronavirus } from "react-icons/md"

import "./home.css";

export const Home = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return <>
        <Flex id="outDiv">
            <Box id="inOne" padding={10}>
                <Box padding={"5px"}  >
                    <Text>Hello there!</Text>
                    <Text>Always caring about your health, we are here to help you!</Text>
                </Box>
                <Flex margin={"5px"} padding={"15px"} id="greencard1">
                    <Image margin={"5px"} src="https://newassets.apollo247.com/images/ic-doctor.svg"></Image>
                    <Text >Book Appointment with Apollo Doctors</Text>
                    <ChevronRightIcon marginBottom={"12px"} alignSelf={"end"} color={"white"} />

                </Flex>
                <Flex margin={"5px"} padding={"15px"} id="greencard1">
                    <Image margin={"5px"} width={"35px"} src="https://newassets.apollo247.com/images/ic_medicines.png"></Image>
                    <Text >Buy Medicines with Essentials</Text>
                    <ChevronRightIcon marginBottom={"15px"} alignSelf={"end"} color={"white"} />
                </Flex>
                <Flex id="labbutton" >
                    <Flex margin={"5px"}>
                        <Image h={"8"} w={"8"} src="https://cdn-icons-png.flaticon.com/512/1860/1860786.png"></Image>
                        <Text marginTop={"1"}>Book Lab Test</Text>
                    </Flex>
                    <Flex margin={"5px"}>
                        <Image h={"8"} w={"8"} src="https://cdn-icons.flaticon.com/png/512/1412/premium/1412299.png?token=exp=1655525739~hmac=827dda25900dc4acf1661faf22efb60d"></Image>
                        <Text marginTop={"1"}>Book Lab Test</Text>
                    </Flex>
                </Flex>

            </Box>
            <Box paddingTop={"120px"} paddingLeft={"10"}>
                <Image src="https://newassets.apollo247.com/images/img-doctors@1x.jpg"></Image>
            </Box>

        </Flex>
        <Box>
            <Crousel />
        </Box>
        <Box id="covidqueries" >
            <Text marginBottom={"10px"} fontSize={"15px"} color={"#07AE8B"}>For COVID-19 Vaccination related queries</Text>
            <Flex justifyContent={"space-around"}>
                <Flex id="carddiv">
                    <RiMessageLine id="icon1" color="orange" />
                    <Text fontSize={"14px"} color="orange">FAQ & Articles</Text>
                </Flex>
                <Flex id="carddiv" >
                    <IoCallOutline id="icon1" color="orange" />
                    <Text fontSize={"14px"} color="orange">Vaccination  queries</Text>

                </Flex>
                <Flex id="carddiv">
                    <BsChatRightText id="icon1" color="orange" />
                    <Text fontSize={"14px"} color="orange">Chat with us</Text>

                </Flex>
                <Flex id="carddiv">
                    <MdOutlineCoronavirus id="icon1" color="orange" />
                    <Text margin={"0px"} fontSize={"14px"} color="orange">Cowin Registration</Text>

                </Flex>
            </Flex>

        </Box>
        <Box id="imagebox" >
            <Image borderRadius={"10px"} src="https://newassets.apollo247.com/images/prohealth/prohealthSliderTwo.jpg"></Image>
        </Box>

        <Box id="healthContainer">
            <Box id="healthArticles">
                {/* <Image id="imagewithtext"src="https://newassets.apollo247.com/images/ecosystem-banner.jpg"></Image> */}
                {/* <Text id="text">HEALTH ARTICALS AND RESOURCES</Text>
                <Text id="text" >Make better Health choices with our curated blogs, videos and expert advice</Text> */}
            </Box>


            <Box id="textButton">
                <Text>HEALTH BLOG</Text>
                <Flex id="textButton2">
                    <Text marginBottom={"0px"}>Explore healthcare content created every day by our experts.</Text>
                    <Flex id="iconinHealth">
                        <BsChatRightText color="orange" />
                        <Text fontSize={"14px"} color={"orange"} marginLeft={"10px"}>Read the Latest Articles</Text>
                    </Flex>
                </Flex>
            </Box>

            <Box id="">
                <Text id="youcan">You can also</Text>
                <Flex justifyContent={"space-evenly"}>
                    <Flex id="tools" >
                        <Image src="https://newassets.apollo247.com/images/ic_psychologist.svg" ></Image>
                        <Text>Health tools</Text>
                    </Flex>
                    <Flex id="tools">
                        <Image src="https://assets.apollo247.com/images/ic_healthy_life.png"></Image>
                        <Text>Explore Healthy life</Text>
                    </Flex>
                    <Flex id="tools">
                        <Image src="https://newassets.apollo247.com/images/apollo-kavach.png"></Image>
                        <Text>Explore Apollo Kavach Program</Text>
                    </Flex>
                </Flex>

            </Box>
        </Box>
        <Box id="textblock">
            <Text className="heading1">Apollo 24|7 - Your Most Trusted Healthcare Brand</Text>
            <Text className="para1">Apollo 24|7 is the largest multi-channel digital healthcare platform in India, created with a vision of eliminating flexibility blockages from the healthcare industry. We believe in making healthcare affordable to everyone by combining analytic excellence, affordable cost, and extensive research with advanced technology. Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home. We also provide expert solutions for chronic conditions and COVID-care with a secured digital vault, where you can safely upload all your medical reports. </Text>
        </Box>
        <Box id="textblock">
            <Text className="heading1">The Smart Choice for Your Health is Here</Text>
            <Text className="para1" >Make the best decision for your health by choosing Apollo 24|7. Here’s why you can count on us:</Text>
            <UnorderedList className="para1">
                <ListItem>36 years of legacy in the healthcare industry</ListItem>
                <ListItem>24x7 availability of doctors</ListItem>
                <ListItem>More than 3.5 million diagnostic tests each year</ListItem>
                <ListItem>700+ collection centres and 100+ laboratories</ListItem>
                <ListItem>High quality and affordable diagnostic solutions </ListItem>
                <ListItem>Fast and accurate test report results</ListItem>
                <ListItem>Several medical specialties under one roof</ListItem>
                <ListItem>Online prescriptions - available anytime, anywhere</ListItem>
                <ListItem>Order medicines and book tests online with ease</ListItem>
                <ListItem>Digitised health queries</ListItem>
            </UnorderedList>
        </Box>
        <Box id="textblock">
            <Text className="heading1">Ask a Doctor Online 24/7</Text>
            <Text className="para1">Online doctor consultations take place through online doctor chat, call, or video call. This helps you to talk to doctors online from the comfort of your home by simply choosing a doctor from different specialties. Avail personalised solutions for any health problem with prompt online doctor consultation with Apollo 24|7.</Text>
            <UnorderedList className="para1">
                <ListItem>Safe and secure platform</ListItem>
                <ListItem>Affordable rates</ListItem>
                <ListItem>Video and chat options</ListItem>
            </UnorderedList>
        </Box>
        <Box id="textblock">
            <Text className="heading1">Online Doctor Consultation - Now at Your Fingertips</Text>
            <Text className="para1">The demand for doctors is expected to increase as new medicines allow people to live longer. However, there are several ways to reach out to a doctor without the need to visit a hospital or clinic, all thanks to technology. With the online facility available, doctor consultations have become easier, and you can get the right health care. Online doctor consultations with 4000+ top medical doctors are available at Apollo 24|7. Video call or chat with expert doctors from 100+ medical specialties, including | Dermatology | Gynaecology | Paediatrics | Psychiatry | General Physicians | Gastroenterology | Dietetics | Ent Specialists | and more, in just 15 minutes.</Text>
        </Box>
        <Box id="textblock" >
            <Text className="heading1">Apollo Hospitals</Text>
            <Text className="para1">Apollo 24|7 is a part of Apollo Hospitals. Apollo Hospitals was established in 1983 by Dr. Prathap C Reddy. It incorporates over 10,000 beds across 70 hospitals, over 4000 pharmacies, 172 primary care and diagnostic clinics, and 148 telemedicine facilities spread across 13 countries. Apollo Hospitals has touched billions of lives by offering exceptional clinical outcomes.</Text>
            <Text className="para1">Milestones of Apollo Hospitals:</Text>
            <UnorderedList className="para1">
                <ListItem>Established in 1983</ListItem>
                <ListItem>Incorporated over 10,000 beds across 70 hospitals</ListItem>
                <ListItem>Over 4000 pharmacies</ListItem>
                <ListItem>172 primary care and diagnostic clinics</ListItem>
                <ListItem>148 telemedicine facilities spread across 13 countries</ListItem>
                <ListItem>Touched billions of lives by offering exceptional clinical outcomes</ListItem>
            </UnorderedList>
        </Box>
        <Box id="footer">
            <Box id="imagedivF">
                <Image src="https://newassets.apollo247.com/images/ic_logo.png"></Image>
            </Box>
            <Box >
                <Flex justifyContent={"space-evenly"} marginTop={"30px"}>

                    <UnorderedList id="footerlist">
                        <Text id="footHead">About apollo 247</Text>
                        <ListItem>About us</ListItem>
                        <ListItem>contact us</ListItem>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Health queries</ListItem>
                        <ListItem>Terms conditions</ListItem>
                        <ListItem>return policy</ListItem>
                        <ListItem>Refund policy</ListItem>
                        <ListItem>Privacy policy</ListItem>
                        <ListItem>Appollo 247 app</ListItem>
                        <ListItem>Online Doctor app</ListItem>
                        <ListItem>Online Medicine app</ListItem>
                       
                    </UnorderedList>
                    <UnorderedList id="footerlist">
                        <Text id="footHead">Services</Text>
                        <ListItem>Online Doctor Consultation</ListItem>
                        <ListItem>Apollo Circle Membership</ListItem>
                        <ListItem>Online Medicines</ListItem>
                        <ListItem>Project Kavach</ListItem>
                        <ListItem>Cough Scanner</ListItem>
                        <ListItem>Covid Vaccine Tracker</ListItem>
                        <ListItem>Covid Vaccine Update</ListItem>
                        <ListItem>Apollo Pro Health Program</ListItem>
                        <ListItem>Doctors by Specialty</ListItem>
                        <ListItem>Doctors by City</ListItem>
                    </UnorderedList>
                    <UnorderedList id="footerlist">
                        <Text id="footHead">Top Specialties</Text>
                        <ListItem>Covid Consultation</ListItem>
                        <ListItem>Consult Physicians</ListItem>
                        <ListItem>Consult Dermatologists</ListItem>
                        <ListItem>Consult Paediatricians</ListItem>
                        <ListItem>Consult Gynaecologists</ListItem>
                        <ListItem>Consult Gastroenterologists</ListItem>
                        <ListItem>Consult Cardiologists</ListItem>
                        <ListItem>Consult Dietitians</ListItem>
                        <ListItem>Consult ENT Specialists</ListItem>
                        <ListItem>Consult Geriatricians</ListItem>
                    </UnorderedList>

                </Flex>

            </Box>

        </Box>


    </>
}






