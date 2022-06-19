import {Image,UnorderedList,ListItem,Box,Flex,Text} from "@chakra-ui/react"
import "./Footer.css"
export const FooterComponent=()=>{
    return <>
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