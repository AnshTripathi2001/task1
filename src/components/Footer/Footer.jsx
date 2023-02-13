import {
  Box,
  Flex,
  IconButton,
  Image,
  List,
  ListItem,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../Header/delivery.png';
export const Footer = () => {
  return (
    <Flex
      bgColor="#F8F8F8"
      flexDirection={{ base: 'column', md: 'row' }}
      as="div"
      width="100%"
      h={{ md: '350px', base: '700px' }}
      justifyContent={'space-evenly'}
      alignItems="center"
    >
      <Box>
        <Image w="100px" src={logo}></Image>
      </Box>
      <Box width={250} textAlign="left">
        <Text fontWeight="bold" color="#0E2368">
          Contact Us
        </Text>
        <Text fontSize="1rem" lineHeight="30px">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text fontSize="1rem">example2020@gmail.com</Text>
        <Text fontSize="1rem">(904) 443-0343</Text>
      </Box>
      <Box width={250} textAlign="left">
        <List fontSize="1rem">
          <Text fontWeight="bold" color="#0E2368">
            More
          </Text>
          <ListItem>About Us</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Contact US</ListItem>
        </List>
      </Box>
      <Flex
        flexDirection={{ md: 'column', base: 'column-reverse' }}
        h={{ md: '150px', base: '100px' }}
      >
        <Text
          fontWeight="bold"
          display={{ md: 'block', base: 'none' }}
          color="#0E2368"
          m={1}
        >
          Social Link
        </Text>

        <Box>
          <IconButton variant="ghost" color="#0E2368" fontSize="1.5rem">
            <FaInstagram />
          </IconButton>
          <IconButton variant="ghost" color="#0E2368">
            <FaFacebookF />
          </IconButton>
          <IconButton variant="ghost" color="#0E2368">
            <FaTwitter />
          </IconButton>
        </Box>

        <Spacer />

        <Text fontFamily="'Roboto', sans-serif" color="#828B9C">
          &copy; 2022 Food Truck Example
        </Text>
      </Flex>
    </Flex>
  );
};
